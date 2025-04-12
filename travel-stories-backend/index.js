const express = require('express');
const app = express();
const TravelStory = require('./models/TravelStory'); // imported for structure only

app.use(express.json());

// GET API (Just returns a placeholder message)
app.get('/', (req, res) => {
  res.send('Hello from Travel Stories Backend');
});

app.get('/api/stories', (req, res) => {
  res.json({ message: 'GET route for travel stories is ready' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
