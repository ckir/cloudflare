import http from 'http';

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status code 200 (OK)
    res.setHeader('Content-Type', 'text/plain'); // Set the response content type
    res.end('Hello, World!\n'); // Send the response
});

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
