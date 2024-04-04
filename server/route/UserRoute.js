const express = require('express');
const { createUser, getAllUser, login, getloggedInUser } = require('../controller/UserController');
const router = express.Router();

router.get('/', getAllUser);
router.post('/register', createUser);
router.post('/login', login);
router.post("/loggedin-user", getloggedInUser);

module.exports = router;