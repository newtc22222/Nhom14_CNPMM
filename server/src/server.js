require('dotenv').config();
const http = require('http');
// const https = require('https');
const app = require('./app');

const PORT = process.env.PORT || 5000;
<<<<<<< Updated upstream
const { mongoConnect } = require('./services/mongo')

const server = http.createServer(app)
const startServer = async () => {
  await mongoConnect()
  server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
  })
=======

const server = http.createServer(app);

const { mongoConnect } = require('./services/mongo');

async function startServer() {
    await mongoConnect();
    
    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}...`);
    })
>>>>>>> Stashed changes
}
startServer();