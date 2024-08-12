const express = require('express'); // Import the express library
const router = express.Router(); // Create a new router object
const itemController = require('../controllers/itemController'); // Import the itemController
const { ensureVolunteerOrManager } = require('../middleware/auth'); // Import the middleware to ensure the user is a volunteer or manager

// Route to get all items
router.get('/', itemController.getAllItems);

// Route to render the add item page, accessible only to volunteers or managers
router.get('/add', ensureVolunteerOrManager, itemController.getAddItem);

// Route to handle the submission of a new item, accessible only to volunteers or managers
router.post('/add', ensureVolunteerOrManager, itemController.postAddItem);

// Route to render the edit item page, accessible only to volunteers or managers
router.get('/edit/:id', ensureVolunteerOrManager, itemController.getEditItem);

// Route to handle the submission of an edited item, accessible only to volunteers or managers
router.post('/edit/:id', ensureVolunteerOrManager, itemController.postEditItem);

// Route to handle the deletion of an item, accessible only to volunteers or managers
router.post('/delete/:id', ensureVolunteerOrManager, itemController.deleteItem);

module.exports = router; // Export the router object