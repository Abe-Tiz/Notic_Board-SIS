const express = require('express');
const { postNews, getNews, updateLike } = require("../controller/NewsController");

const router = express.Router();

router.get('/', getNews);
router.post('/post', postNews);
router.post('/update-like', updateLike);

module.exports = router;