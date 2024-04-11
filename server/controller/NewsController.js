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
    console.log(newsItem);
    res.status(200).json(newsItem);
  } catch (error) {
    res
      .status(500)
      .json(error.message );
  }
};



module.exports = {
  postNews,
  getNews,
  updateLike,
  updateComment,
};