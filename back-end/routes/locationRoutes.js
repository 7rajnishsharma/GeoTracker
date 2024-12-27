const express = require('express');
const { updateLocation } = require('../controllers/locationController'); // Ensure this path is correct
const { authenticate } = require('../middleware/authMiddleware'); // Assuming you have an auth middleware
const router = express.Router();

router.post('/', authenticate, updateLocation); // Protect the route with authentication

module.exports = router;