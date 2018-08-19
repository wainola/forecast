const axios = require('axios');

const darkSkyHandler = async (socket, DEV_KEY) => {
  console.log('devkey', DEV_KEY)
  try {
    if (Math.random(0, 1) < 0.1) {

      throw new Error('Ohp! there is an error with the API');
    }
    // const santiago = await axios.get(`https://api.darksky.net/forecast/${devKey}/43.7695,11.2558`);
    // const zurich = await axios.get(`https://api.darksky.net/forecast/${devKey}/43.7695,11.2558`);
    // const auckland = await axios.get(`https://api.darksky.net/forecast/${devKey}/43.7695,11.2558`)
    // const sydney = await axios.get(`https://api.darksky.net/forecast/${devKey}/43.7695,11.2558`);
    // const london = await axios.get(`https://api.darksky.net/forecast/${devKey}/43.7695,11.2558`);
    // const georgia = await axios.get(`https://api.darksky.net/forecast/${devKey}/43.7695,11.2558`);
    console.log('res from employees', res.data)
    socket.emit('FROM_API', res.data)
  } catch (err) {
    console.error(`Error: ${err}`)
  }
}

module.exports = darkSkyHandler;