const express = require('express');
const { getAllUsers, getAllLocations } = require('../controllers/adminController'); // Ensure this path is correct
const router = express.Router();

router.get('/users', getAllUsers); // Ensure getAllUsers is defined
router.get('/locations', getAllLocations); // Ensure getAllLocations is defined

module.exports = router;