const express = require('express');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
app.use(express.static('public')); // Serve client HTML/JS from 'public'
const server = http.createServer(app);

const io = new Server(server); // Attach Socket.IO to server

// Handle client connections
let count = 0;
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  count++;
  io.sockets.emit('count', count);

  // Listen for messages from this client
  socket.on('message', (data) => {
    console.log('Message from client:', data);

    // Broadcast to all other clients except sender
    // socket.broadcast.emit('data', data);

    // Optional: send back to sender too
    socket.emit('data', data);
  });

  socket.on('disconnect', () => {
    count--;
    console.log('User disconnected:', socket.id);
  });
});

// If you want the server to send a global message at any time:
io.emit('data', 'Hello everyone!'); // sends to all connected clients

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
