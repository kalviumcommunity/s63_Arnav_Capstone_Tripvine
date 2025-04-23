require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const travelRoutes = require('./routes/travelStories');
const uploadRoute = require('./routes/upload'); // ✅ Import the upload route

const app = express();
app.use(express.json());

// Routes
app.use('/api/stories', travelRoutes);
app.use('/api/upload', uploadRoute); // ✅ Mount the upload route

// DB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
