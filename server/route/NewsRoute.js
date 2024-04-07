const express = require('express');
const { postNews, getNews } = require("../controller/NewsController");

const router = express.Router();

router.get('/', getNews);
router.post('/post', postNews);

module.exports = router;