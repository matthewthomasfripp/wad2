const User = require('../models/userModel'); // Import the User model
const Shop = require('../models/shopModel'); // Import the Shop model

// Controller to get all users
exports.getAllUsers = async (req, res) => {
  const users = await User.findAllVolunteers(); // Fetch all volunteer users from the database
  res.render('users', { users }); // Render the users page with the list of users
};

// Controller to render the edit user page
exports.getEditUser = async (req, res) => {
  const user = await User.findById(req.params.id); // Fetch the user by ID from the database
  if (!user) return res.render('404'); // If the user is not found, render the 404 page

  const dbShops = await Shop.findAll(); // Fetch all shops from the database

  // Map through the shops and mark the selected shop
  const shops = dbShops.map(shop => ({ selected: shop.name === user.shop, ...shop }));

  res.render('editUser', { user, shops }); // Render the edit user page with the user and list of shops
};

// Controller to handle the submission of an edited user
exports.postEditUser = async (req, res) => {
  const { username, password, shop } = req.body; // Extract updated user details from request body
  await User.updateById(req.params.id, { username, password, shop }); // Update the user in the database
  res.redirect('/users'); // Redirect to the users page
};

// Controller to render the add user page
exports.getAddUser = async (req, res) => {
  const shops = await Shop.findAll(); // Fetch all shops from the database
  res.render('addUser', { shops }); // Render the add user page with the list of shops
};

// Controller to handle the submission of a new user
exports.postAddUser = async (req, res) => {
  const { username, password, shop } = req.body; // Extract new user details from request body
  // Password is hashed in the model
  await User.create({ username, password, role: 'volunteer', shop }); // Create a new user in the database
  res.redirect('/users'); // Redirect to the users page
};

// Controller to handle the deletion of a user
exports.deleteUser = async (req, res) => {
  await User.deleteById(req.params.id); // Delete the user by ID from the database
  res.redirect('/users'); // Redirect to the users page
};
