const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Serve the image via API
app.get('/api/image', (req, res) => {
  res.sendFile(path.join(__dirname, 'img.jpg'));
});

// Serve frontend HTML
app.use(express.static(path.join(__dirname, '../frontend')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
