const http = require('http');
// const https = require('https');
const app = require('./app');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

async function startServer() {
    
    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}...`);
    })
}

startServer();