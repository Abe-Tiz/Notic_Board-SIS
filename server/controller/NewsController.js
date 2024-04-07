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


module.exports = {
  postNews,
  getNews,
};