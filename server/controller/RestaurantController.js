const Restaurant = require("../model/Restaurant");

// Create and Save a new Restaurant
const createRestaurant = async (req, res) => {
  const { name, location } = req.body;
  try {
    // Check if the restaurant already exists
    const existingRestaurant = await Restaurant.findOne({ name });
    if (existingRestaurant) {
      throw new Error("Restaurant name must be unique");
    }

    // Create a Restaurant
    const restaurant = new Restaurant({ name, location });
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createRestaurant };
