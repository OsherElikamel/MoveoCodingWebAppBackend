require('dotenv').config();
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const app = require('./app');
const socketHandler = require('./socket');

const PORT = process.env.PORT || 3001;

connectDB();

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
});

socketHandler(io);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});