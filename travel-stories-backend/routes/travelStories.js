// routes/travelStories.js

const express = require('express');
const router = express.Router();
const TravelStory = require('../models/TravelStory');

// GET all travel stories from DB
router.get('/', async (req, res) => {
  try {
    const stories = await TravelStory.find();
    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch travel stories' });
  }
});

// POST a new travel story to DB
router.post('/', async (req, res) => {
  try {
    const newStory = new TravelStory(req.body);
    const savedStory = await newStory.save();
    res.status(201).json({
      message: 'Travel story submitted successfully!',
      data: savedStory,
    });
  } catch (err) {
    res.status(400).json({ error: 'Failed to submit travel story', details: err.message });
  }
});

// PUT route to update a travel story by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedStory = await TravelStory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedStory) {
      return res.status(404).json({ error: 'Travel story not found' });
    }
    res.json({
      message: 'Travel story updated successfully',
      data: updatedStory,
    });
  } catch (err) {
    res.status(400).json({ error: 'Failed to update travel story', details: err.message });
  }
});

module.exports = router;
