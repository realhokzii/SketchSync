const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

app.use(cors());
app.get('/', (req, res) => res.send('Server is running!'));

server.listen(3001, () => console.log('Server on http://localhost:3001'));
