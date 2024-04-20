const express = require("express");
const { createSingleMessage, getSingleMessage } = require("../controller/SingleMessageController");
 
const router = express.Router();

router.get("/", getSingleMessage);
router.post("/send", createSingleMessage);
// router.post("/update-like", updateLike);
// router.post("/comment", updateComment);

module.exports = router;
