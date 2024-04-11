const News = require("../model/News");

// create news 
const postNews = async (req, res) => {
    const news = req.body;
    try {
        const data = await News.create(news);
        res.status(200).json(data);
    } catch (error) {
        
    }
}

// get posted news
const getNews = async (req, res) => {
   
  try {
    const data = await News.find({});
    res.status(200).json(data);
  } catch (error) {}
};

const updateLike =async (req, res) => {
  const { postId, userId } = req.body;
  try {
   const newsItem = await News.findById(postId);
    const likeIndex = newsItem.like.indexOf(userId);
    console.log(likeIndex); 
   if (likeIndex !== -1) {
     // User has liked the post, remove the like
     newsItem.like.splice(likeIndex, 1);
     await newsItem.save();
     console.log("Like removed!");
     res.status(200).json("Like removed");
   } else {
     // User hasn't liked the post, add the like
     newsItem.like.push(userId);
     await newsItem.save();
      console.log("Like added!");
     res.status(200).json("Like added");
   }
  } catch (error) {
    res.status(500).json('Error updating like');
  }
}
const updateComment =async (req, res) => {
  const { postId, userId,comment } = req.body;
  try {
    const newsItem = await News.findById(postId);
    if (!newsItem.like.includes(userId)) {
      newsItem.like.push(userId);
      await newsItem.save();
      console.log(newsItem);
      res.status(200).json('Like updated');
    } else {
      res.status(400).json('User already liked this post');
    }
  } catch (error) {
    res.status(500).json('Error updating like');
  }
}


module.exports = {
  postNews,
  getNews,
  updateLike,
};