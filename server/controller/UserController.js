const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken");

// register user
const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add users to database
const createUser = async (req, res) => {
  const user = req.body;
  const query = { email: user.email };
  console.log(user);
  try {
    const existingUser = await User.findOne(query);
    if (existingUser) {
      return res.status(302).json({ message: "user already exist" });
    }

    // change isCordinator value to true if user is cordinator
    if (user.role === "coordinator") {
      user.isCordinator = true;
    }

    // Encrypt the user's password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;

    // Check if image is provided
    // if (!user.image) {
    //   return res.status(400).json({ message: "Image is required" });
    // }

    const result = await User.create(user);
    result.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      console.log("User is not found.");
      return res.status(404).json({ message: "User is not found." });
    }

    if (user.isActive === false) {
      return res.status(403).json({
        message:
          "Your account is deactivated. Please contact Admin to activate.",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(user);
    if (passwordMatch) {
      if (user.verified) {
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
        user.failedLoginAttempts = 0;
        await user.save();
        res
          .status(200)
          .json({ message: "Logged In Succssfully!", token: token, user });
      } else {
        // console.log("User not verified");
        res.json({ message: "Not verified" });
      }
    } else {
      console.log("Password is not matched");
      user.failedLoginAttempts += 1;
      await user.save();
      console.log(user.failedLoginAttempts);
      if (user.failedLoginAttempts >= 4) {
        user.isActive = false;
        await user.save();
        return res.status(403).json({
          message:
            "Your account is deactivated. Please contact support to activate.",
        });
      }
      res.status(500).json({ message: "Password is not matched" });
    }
  } catch (error) {
    console.error("Error in loginUser:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getloggedInUser = async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    // console.log(user);
    if (user === "token expired") {
      return res.send({ data: "expired" });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {
    res.send({ status: "error", data: error });
  }
};

// search user
const getUserByName = async (req, res) => {
  try {
    const { fname } = req.body;
    const user = await User.find({
      fname: { $regex: new RegExp(`^${fname}`, "i") },
    }).exec();

    if (user.length === 0) {
      return res.status(404).json({ message: "user not founddd" });
    }

    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await User.findById(id);
    if (!findUser) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(findUser);
    const result = await User.deleteOne(
      { _id: id },
      { new: true }
    );
      console.log(result);
      return res.status(200).json({message:"deleted successfully"});
  
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createUser,
  getAllUser,
  login,
  getloggedInUser,
  getUserByName,
  deleteUser,
};
