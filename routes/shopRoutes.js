const express = require('express'); // Import the express library
const router = express.Router(); // Create a new router object
const shopController = require('../controllers/shopController'); // Import the shopController

// Route to get all shops
router.get('/', shopController.getAllShops);

// Route to get a specific shop by name
router.get('/:name', shopController.getShop);

module.exports = router; // Export the router object