// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

const path = require('path');

// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
//
