// Import the built-in HTTP module
const http = require('http');

// Define hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Set response header
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Send greeting message
    res.end('Hello! Welcome to my Node.js server 🚀');
});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});