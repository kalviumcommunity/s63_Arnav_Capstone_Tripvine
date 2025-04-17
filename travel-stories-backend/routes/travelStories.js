const express = require('express');
const router = express.Router();

// GET route
router.get('/', (req, res) => {
  res.send('This is where all travel stories will be fetched.');
});

// POST route
router.post('/', (req, res) => {
  const { title, description, location } = req.body;
  res.status(201).json({
    message: 'Travel story submitted successfully!',
    data: { title, description, location },
  });
});

// PUT route structure only
router.put('/:id', (req, res) => {
  // Will add database update logic later
  res.send('PUT endpoint for updating a travel story by ID');
});

module.exports = router;

