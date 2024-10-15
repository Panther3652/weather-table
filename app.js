
require('dotenv').config();
const express = require('express');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/weather', weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
