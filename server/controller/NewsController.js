const News = require("../model/News");
const nodemailer = require("nodemailer");
const User = require("../model/User");

// create news 
const postNews = async (req, res) => {
    const news = req.body;
    try {
      const data = await News.create(news);
      const users = User.find({});
      
        res.status(200).json({post:data, users:users});
    } catch (error) {
        res
          .status(500)
          .json({ message: "Error creating news item", error: error.message });
    }
}


const sendverificationEmail = async (email, subtitle) => {
  //! create nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abebetizazu157@gmail.com",
      pass: "gezm fqmn asjl bqxj",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  //! compose the email message
  const mailOption = {
    from: "abebetizazu157@gmail.com",
    to: email,
    subject: "New Post from head",
    text: `${subtitle} please see the posts for more information!`,
  };

  try {
    await transporter.sendMail(mailOption);
  } catch (error) {
    console.error("error sending email", error);
  }
};

// get posted news
const getNews = async (req, res) => {
  try {
    const data = await News.find()
      .populate("like", "fname lname image")
      .populate({
        path: "message",
        populate: {
          path: "user",
          select:"fname lname email role image"
        },
      })
      .exec();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateLike =async (req, res) => {
  const { postId, userId } = req.body;
  try {
    const newsItem = await News.findById(postId);
      const likeIndex = newsItem.like.indexOf(userId);
      // console.log(likeIndex); 
    if (likeIndex !== -1) {
      newsItem.like.splice(likeIndex, 1);
      await newsItem.save();
      res.status(200).json("Like removed");
    } else {
      newsItem.like.push(userId);
      await newsItem.save();
      res.status(200).json("Like added");
    }
  } catch (error) {
    res.status(500).json('Error updating like');
  }
}

const updateComment = async (req, res) => {
  const { userId, content, newsId } = req.body;
  try {
    const newsItem = await News.findById(newsId);
    const comment = {
      user: userId,
      content: content,
    };
    newsItem.message.push(comment);
    await newsItem.save();
    const commentNumber = newsItem.message.length;
    // console.log(newsItem.message.length);
    res.status(200).json(commentNumber);
  } catch (error) {
    res
      .status(500)
      .json(error.message );
  }
};

const deletePost = async (req, res) => { 
  const { id } = req.params;
  try { 
    const found = await News.findById(id);
    if (!found) {
      res.status(404).json("Post Not Found!!!")
    }
    const result = await News.deleteOne(
      { _id : id },
      { new : true }
    );
    // console.log(post);
    res.status(200).json({message:"Deleted successfully"});
  } catch (error) {
    // console.log(error.message)
    res.status(500).json(error);
   }
}

module.exports = {
  postNews,
  getNews,
  updateLike,
  updateComment,
  deletePost,
};