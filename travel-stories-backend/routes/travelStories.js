const express = require('express');
const router = express.Router();

// Sample GET route
router.get('/', (req, res) => {
  res.send('This is where all travel stories will be fetched.');
});

// POST route to create a travel story
router.post('/', (req, res) => {
  const { title, description, location } = req.body;

  // For now, just sending the data back as a response (no DB yet)
  res.status(201).json({
    message: 'Travel story submitted successfully!',
    data: { title, description, location },
  });
});

module.exports = router;
