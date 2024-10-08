// socket.js
const socketIo = require("socket.io");
let io = null;

module.exports = {
  init: (server) => {
    io = socketIo(server);
    return io;
  },
  getIo: () => {
    if (!io) {
      throw new Error("Socket.io not initialized!");
    }
    return io;
  },
};
