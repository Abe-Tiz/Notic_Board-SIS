const News = require("../model/News");
const SingleMessage = require("../model/SingleMessage");
const User = require("../model/User");


  const createSingleMessage = async (req, res) => {
    try {
      // Extract user and content IDs from the request body
      const { userId, contentId } = req.body;

      // Ensure both user and content exist
      const userExists = await User.findById(userId);
      const contentExists = await News.findById(contentId);

      if (!userExists || !contentExists) {
        return res.status(404).json({ message: "User or Content not found" });
      }

      // Create a new SingleMessage
      const newMessage =await  SingleMessage.create({
        user: userId,
        content: contentId,
      });

      // Send back the saved SingleMessage
      res.status(201).json(newMessage);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

const getSingleMessage = async (req, res) => {
  try {
    const messages = await SingleMessage.find()
      .populate("user", "fname lname email role")
      .populate("content", "title content"); 

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { createSingleMessage, getSingleMessage };
