const express = require('express');
const http = require('http');
const axios = require('axios');
const dotenv = require('dotenv').config();
const cors = require('cors');
const socketIO = require('socket.io')
const darkSkyHandler = require('./handlers/darkSkyHandler')

const { PORT: port, DEVELOPMENT_KEY: DEV_KEY } = process.env;

const app = express();
app.use(cors());

const server = http.createServer(app);
const IO = socketIO(server);

IO.on('connection', socket => {
  console.log('Client conetected', setInterval(
    () => darkSkyHandler(socket, DEV_KEY), 10000
  ))
  socket.on('disconnect', () => console.log('Client disconected!'))
});

server.listen(port, () => console.log(`Listening on port ${port}`));