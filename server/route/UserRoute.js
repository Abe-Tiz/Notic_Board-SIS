const express = require('express');
const { createUser, getAllUser, login, getloggedInUser, getUserByName, deleteUser, getVerification, activateUser } = require('../controller/UserController');
const router = express.Router();

router.get('/', getAllUser);
router.post('/register', createUser);
router.post('/login', login);
router.post("/loggedin-user", getloggedInUser);
router.post("/search", getUserByName);
router.delete("/delete/:id", deleteUser);
router.get("/verify/:tokenId", getVerification);
router.post("/activate", activateUser);

module.exports = router;