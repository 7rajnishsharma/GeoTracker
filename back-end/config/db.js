const mongoose = require('mongoose');
const { Pool } = require('pg');

const mongoURI = 'mongodb://localhost:27017/locationTracker';

// Connect to MongoDB without deprecated options
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const pgPool = new Pool({
  user: 'your_pg_user',
  host: 'localhost',
  database: 'your_pg_database',
  password: 'your_pg_password',
  port: 5432,
});

module.exports = { mongoose, pgPool };