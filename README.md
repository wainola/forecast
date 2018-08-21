# Forecast

This is a websocket server to retreive data from DarkSky API.

## Get it

```bash
git clone https://github.com/wainola/forecast.git
cd forecast
npm install
nodemon server.js
```

## Setup .env file

```bash
cat sample.env > .env
```

Then add your DEVELOPMENT_KEY to your `.env` file to consume DarkSky API. Go to [DarkSky API](https://darksky.net/dev), sign in for free, and copy your key to your local file

```bash
# Example .env file
NODE_ENV=development
PORT=9003
DEVELOPMENT_KEY=development_key
```


## How to deploy it to heroku.

```bash
heroku create
git push heroku master
```
