const express = require('express');
const http = require('http');
const axios = require('axios');
const dotenv = require('dotenv').config();
const cors = require('cors');
const socketIO = require('socket.io')

const { PORT: port, DEVELOPMENT_KEY: DEV_KEY } = process.env;

const app = express();
app.use(cors());

const server = http.createServer(app);
const IO = socketIO(server);

IO.on('connection', socket => {
  setInterval(
    
  )
})
