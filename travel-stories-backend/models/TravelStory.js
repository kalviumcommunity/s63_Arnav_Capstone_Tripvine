const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  safety: { type: Number, min: 0, max: 5 },
  affordability: { type: Number, min: 0, max: 5 },
  cleanliness: { type: Number, min: 0, max: 5 },
  overall: { type: Number, min: 0, max: 5 }
}, { _id: false });

const travelStorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  destination: { type: String, required: true },
  country: { type: String, required: true },
  bestTimeToVisit: { type: String },
  activities: [{ type: String }],
  rating: ratingSchema,
  pros: { type: String },
  cons: { type: String },
  mediaUrls: [{ type: String }],
  tips: { type: String },
  tags: [{ type: String }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('TravelStory', travelStorySchema);
