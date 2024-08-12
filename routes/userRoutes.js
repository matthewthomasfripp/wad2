const express = require('express'); // Import the express library
const router = express.Router(); // Create a new router object
const userController = require('../controllers/userController'); // Import the userController
const { ensureManager } = require('../middleware/auth'); // Import the middleware to ensure the user is a manager

// Route to get all users, accessible only to managers
router.get('/', ensureManager, userController.getAllUsers);

// Route to render the add user page, accessible only to managers
router.get('/add', ensureManager, userController.getAddUser);

// Route to handle the submission of a new user, accessible only to managers
router.post('/add', ensureManager, userController.postAddUser);

// Route to render the edit user page, accessible only to managers
router.get('/edit/:id', ensureManager, userController.getEditUser);

// Route to handle the submission of an edited user, accessible only to managers
router.post('/edit/:id', ensureManager, userController.postEditUser);

// Route to handle the deletion of a user, accessible only to managers
router.post('/delete/:id', ensureManager, userController.deleteUser);

module.exports = router; // Export the router object