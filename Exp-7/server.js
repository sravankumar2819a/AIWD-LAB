// Import HTTP module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    const name = "Sravan Kumar Reddy"; // replace with your name
    const currentTime = new Date();

    // Set response header
    res.writeHead(200, { "Content-Type": "text/html" });

    // Send response
    res.write(`<h2>Hello from ${name}'s Node.js Server</h2>`);
    res.write(`<p>Current Date and Time: ${currentTime}</p>`);

    res.end();
});

// Start server
server.listen(3000, "0.0.0.0", () => {
    console.log("Server running at http://localhost:3000");
});