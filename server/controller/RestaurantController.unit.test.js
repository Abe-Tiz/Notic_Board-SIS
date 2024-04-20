const Restaurant = require("../model/Restaurant");
const { createRestaurant } = require("../controller/RestaurantController");

describe("Creating restaurant", () => {
  it("Should not create a restaurant and throw an error when name is not unique", async () => {
    // Mock findOne to return an existing restaurant
    Restaurant.findOne = jest.fn().mockReturnValueOnce({
      name: "abebe",
    });

    // Mock save method
    Restaurant.prototype.save = jest
      .fn()
      .mockImplementation(() => Promise.resolve());

    // Create a mock request object
    const req = {
      body: {
        name: "abebe",
        location: "motta",
      },
    };

    // Create a mock response object
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };

    // Assert that the createRestaurant function throws an error
    await expect(createRestaurant("abebe","motta")).rejects.toThrowError();
    
  });
});
