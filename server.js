require('dotenv').config();
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const app = require('./app');
const socketHandler = require('./socket');
const path = require('path');

const PORT = process.env.PORT || 3001;

connectDB();

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
socketHandler(io);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
