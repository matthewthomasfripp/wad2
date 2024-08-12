const express = require('express'); // Import the express library
const router = express.Router(); // Create a new router object
const authController = require('../controllers/authController'); // Import the authController

// Route to render the landing page
router.get('/', authController.getLanding);

// Route to render the about page
router.get('/about', authController.getAbout);

// Route to render the login page
router.get('/login', authController.getLogin);

// Route to handle login form submission
router.post('/login', authController.postLogin);

// Route to handle logout
router.get('/logout', authController.logout);

module.exports = router; // Export the router object