
const express = require('express');
const app = express();



// Sample route
app.get('/', (req, res) => {
  res.send('Hello from Travel Stories Backend');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
