const Location = require('../models/locationModel');
const User = require('../models/userModel');

exports.updateLocation = async (req, res) => {
  const { latitude, longitude } = req.body;
  const userId = req.user.id; // Assuming you have user authentication set up

  try {
    const locationData = {
      userId,
      coordinates: {
        type: 'Point',
        coordinates: [longitude, latitude], // Note: [longitude, latitude] order
      },
    };

    // Save the location to the database
    const location = new Location(locationData);
    await location.save();

    res.status(200).json({ message: 'Location updated successfully' });
  } catch (error) {
    console.error('Error updating location:', error);
    res.status(500).json({ message: 'Error updating location' });
  }
};