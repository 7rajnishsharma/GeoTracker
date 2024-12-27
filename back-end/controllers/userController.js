const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser  = await User.findOne({ username });
    if (existingUser ) {
      return res.status(400).json({ message: 'Username already exists' }); // Return error if username is taken
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User  registered successfully' }); // Send success message
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' }); // Send error message
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id }, 'your_jwt_secret'); // Replace with your actual secret
  res.json({ token });
};