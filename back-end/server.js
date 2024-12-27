const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const locationRoutes = require('./routes/locationRoutes'); // Import the location routes
const { mongoose, pgPool } = require('./config/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/locations', locationRoutes); // Use the location routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});