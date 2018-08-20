const axios = require('axios');
const moment = require('moment');
const redis = require('redis');

const { REDIS_URL } = process.env

const client = redis.createClient(REDIS_URL)

const darkSkyHandler = async (socket, DEV_KEY) => {
  try {
    if (Math.random(0, 1) < 0.1) {
      console.error('Error and timestamp', moment().format())
      client.hset(`forecast-${moment().format()}`, 'There was an error with the API', moment().format(), redis.print)
      throw new Error('Ops! there is an error with the API');
    }
    const santiago = await axios.get(`https://api.darksky.net/forecast/${DEV_KEY}/-33.447487,-70.673676?units=si`);
    const zurich = await axios.get(`https://api.darksky.net/forecast/${DEV_KEY}/47.451542,8.564572?units=si`);
    const auckland = await axios.get(`https://api.darksky.net/forecast/${DEV_KEY}/-36.848461,174.763336?units=si`)
    const sydney = await axios.get(`https://api.darksky.net/forecast/${DEV_KEY}/-33.865143,151.209900?units=si`);
    const london = await axios.get(`https://api.darksky.net/forecast/${DEV_KEY}/51.509865,-0.118092?units=si`);
    const georgia = await axios.get(`https://api.darksky.net/forecast/${DEV_KEY}/33.247875,-83.441162?units=si`);
    socket.emit('FROM_API', [santiago.data, zurich.data, auckland.data, sydney.data, london.data, georgia.data])
  } catch (err) {
    console.error(`Error: ${err}`)
    socket.emit('FROM_API', { 'msg': 'ops! and error ocurred'})
  }
}

module.exports = darkSkyHandler;