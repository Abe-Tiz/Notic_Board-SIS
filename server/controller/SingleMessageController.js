const News = require("../model/News");
const SingleMessage = require("../model/SingleMessage");
const User = require("../model/User");


  const createSingleMessage = async (req, res) => {
    try {
      // Extract user and content IDs from the request body
      const { role, id } = req.body;

      // Find users based on the role
      const users = await User.find({ role: role });

      // Ensure content exists
      const contentExists = await News.findById(id);
      if (!contentExists || !users) {
        return res.status(404).json( "Content not found");
      }

      // Create a new SingleMessage for each user found
      const newMessages = await Promise.all(
        users.map(async (user) => {
          const newMessage = await SingleMessage.create({
            user: user._id,
            content: id,
          });
          return newMessage;
        })
      );

      
      // Send back the saved SingleMessage
      res.status(201).json(newMessages);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

const getSingleMessage = async (req, res) => {
  try {
    const messages = await SingleMessage.find()
      .populate({
        path: "user",
        select: "fname lname email role",
      })
      .populate({
        path: "content",
        select: "title content",
      });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { createSingleMessage, getSingleMessage };
