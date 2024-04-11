const express = require('express');
const { postNews, getNews, updateLike, updateComment } = require("../controller/NewsController");

const router = express.Router();

router.get('/', getNews);
router.post('/post', postNews);
router.post('/update-like', updateLike);
router.post("/comment", updateComment);

module.exports = router;