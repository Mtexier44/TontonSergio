

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  // Logic for login page
});

app.get('/signup', (req, res) => {
  // Logic for signup page
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
