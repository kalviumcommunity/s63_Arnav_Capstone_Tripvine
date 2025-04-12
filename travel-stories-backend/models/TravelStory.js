// models/TravelStory.js

const mongoose = require('mongoose');

const travelStorySchema = new mongoose.Schema({
  title: String,
  destination: String,
  country: String,
  bestTimeToVisit: String,
  activities: [String],
  rating: {
    safety: Number,
    affordability: Number,
    cleanliness: Number,
    overall: Number
  },
  pros: String,
  cons: String,
  mediaUrls: [String],
  tips: String,
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: String
});

module.exports = mongoose.model('TravelStory', travelStorySchema);
