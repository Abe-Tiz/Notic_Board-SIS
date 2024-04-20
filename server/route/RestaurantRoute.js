const express = require("express");
const { createRestaurant } = require("../controller/RestaurantController");
 
const router = express.Router();


router.post("/", createRestaurant);

module.exports = router;
