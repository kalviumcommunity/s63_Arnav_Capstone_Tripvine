// /index.js
const express = require('express');
const app = express();
const travelStoriesRoutes = require('./routes/travelStories');

// Middleware to parse incoming requests with JSON payload
app.use(express.json());

// Use travel stories routes
app.use('/api/stories', travelStoriesRoutes);

// Sample route to check if the server is running
app.get('/', (req, res) => {
  res.send('Hello from Travel Stories Backend!');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
