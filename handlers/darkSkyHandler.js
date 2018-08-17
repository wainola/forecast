const axios = require('axios');
const darkSkyHandler = async socket => {
  try {
    const res = await axios.get(`http://localhost:9001/employees`);
    socket.emit('FROM_API', res.data)
  } catch (err) {
    console.error(`Error: ${err}`)
  }
}

module.exports = darkSkyHandler;