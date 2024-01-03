const socketio = require('socket.io');

function setupSocket(server) {
  const io = socketio(server);
  
  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  return io;
}

module.exports = setupSocket;