const express = require('express');
const path = require('path');
const app = express();
const port = 8976;

// Serve static files
app.use(express.static(path.join(__dirname, 'TontonSergio')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'TontonSergio', 'home.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${8976}`);
});
