const axios = require('axios');
const moment = require('moment');
const redis = require('redis');

const client = redis.createClient()

const darkSkyHandler = async (socket, DEV_KEY) => {
  try {
    if (Math.random(0, 1) < 0.1) {
      console.error('Error and timestamp', moment().format())
      client.hset(`forecast-${moment().format()}`, 'There was an error with the API', moment().format(), redis.print)
      throw new Error('Ops! there is an error with the API');
    }
    const santiago = await axios.get(`https://api.darksky.net/forecast/${DEV_KEY}/-33.447487,-70.673676`);
    const zurich = await axios.get(`https://api.darksky.net/forecast/${DEV_KEY}/47.451542,8.564572`);
    // const auckland = await axios.get(`https://api.darksky.net/forecast/${devKey}/43.7695,11.2558`)
    // const sydney = await axios.get(`https://api.darksky.net/forecast/${devKey}/43.7695,11.2558`);
    // const london = await axios.get(`https://api.darksky.net/forecast/${devKey}/43.7695,11.2558`);
    // const georgia = await axios.get(`https://api.darksky.net/forecast/${devKey}/43.7695,11.2558`);
    console.log('res data', santiago.data)
    socket.emit('FROM_API', [santiago.data, zurich.data])
  } catch (err) {
    console.error(`Error: ${err}`)
  }
}

module.exports = darkSkyHandler;