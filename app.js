
require('dotenv').config();
const express = require('express');
const weatherRoutes = require('./src/routes/weatherRoutes');
const importRoutes = require('./src/routes/importRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/weather', weatherRoutes);
app.use('/api', importRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
