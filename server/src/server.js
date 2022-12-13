const http = require('http');
// const https = require('https');
const app = require('./app');

const PORT = process.env.PORT || 5000;
const { mongoConnect } = require('./services/mongo')

const server = http.createServer(app)
const startServer = async () => {
  await mongoConnect()
  server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
  })
}
startServer();