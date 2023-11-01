// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;

// Define a route to handle GET requests to the root URL
app.get('/', (req, res) => {gi
  res.send('Hello World!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});