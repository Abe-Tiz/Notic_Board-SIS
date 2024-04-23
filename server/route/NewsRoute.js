const express = require('express');
const { postNews, getNews, updateLike, updateComment, deletePost } = require("../controller/NewsController");
const isAuthenticated = require('../middleware/AuthMiddleware');

const router = express.Router();

router.get("/",getNews);
router.post('/post', postNews);
router.post('/update-like', updateLike);
router.post("/comment", updateComment);
router.delete("/delete/:id", deletePost);

module.exports = router;