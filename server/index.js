const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const DB = require('./config/db');

// Initialize environment variables and database
dotenv.config()
DB();

const app = express();
const http = require("http");
const socketConfig = require("./socket"); // Import the socket configuration
const server = http.createServer(app);

// Apply CORS and JSON middleware
// const corsOptions = {
//   origin: "http://localhost:5173/",
//   credentials: true,  
//   optionSuccessStatus: 200,
// };
app.use(cors());
app.use(express.json());

// Initialize the Socket.IO instance
const io = socketConfig.init(server);

// This will listen for new connections from clients
io.on('connection', (socket) => {
  console.log("⚡ New client connected");

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const port = process.env.PORT;

// Import routes
const userRoute = require("./route/UserRoute");
const newsRoute = require("./route/NewsRoute");
const SingleMessageRoute = require("./route/SingleMessageRoute");
const RestaurantRoute = require("./route/RestaurantRoute");

// Define routes
app.get('/', (req, res) => {
    res.json("hello world");
})
app.use('/user',userRoute)
app.use('/news',newsRoute)
app.use("/single", SingleMessageRoute);
app.use("/restaurant", RestaurantRoute);


// Start the server
server.listen(port, () => {
    console.log(`✅ server is running on port ${port}`);
})