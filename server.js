const http = require('http');
const dotenv = require('dotenv').config()

const { PORT: port } = process.env;

const router = (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');

  // CORS
  if(request.method === 'OPTIONS'){
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
      'Access-Control-Max-Age': 300
    };

    response.writeHead(204, headers);
    response.end()
    return
  }

  // ROUTING
  try {

  } catch (err) {
    response.writeHead('500', { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ 'error': { 'message': 'failing!!' }}))
  }
}

const server = http.createServer(router)

server.listen(port, (err) => {
  if(err){
    return console.error('Something went wrong!', err);
  }

  console.info(`Server listening on ${port}`);
});