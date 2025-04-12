// /routes/travelStories.js
const express = require('express');
const router = express.Router();

// Sample GET route for fetching travel stories (to be replaced with DB logic later)
router.get('/', (req, res) => {
  res.send('This is where all travel stories will be fetched.');
});

module.exports = router;
