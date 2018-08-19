const axios = require('axios');

const darkSkyHandler = async (socket, DEV_KEY) => {
  console.log('devkey', DEV_KEY)
  try {
    const res = await axios.get(`http://localhost:9002/employees`);
    console.log('res from employees', res.data)
    socket.emit('FROM_API', res.data)
  } catch (err) {
    console.error(`Error: ${err}`)
  }
}

module.exports = darkSkyHandler;