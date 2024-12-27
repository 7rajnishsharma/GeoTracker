const User = require('../models/userModel');
const Location = require('../models/locationModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
};

exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find().populate('userId', 'username'); // Populate userId with username
    res.status(200).json(locations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ message: 'Error fetching locations' });
  }
};