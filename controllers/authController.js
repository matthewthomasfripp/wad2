const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// Controller to render the landing page
exports.getLanding = (req, res) => {
    res.render('landing', { title: 'Ayrshire Hospice' }); // Render the landing page with the title
};

// Controller to render the about page
exports.getAbout = (req, res) => {
    res.render('about', { title: 'About Us' }); // Render the about page with the title
};

// Controller to render the login page
exports.getLogin = (req, res) => {
    if (req.session.userId) return res.redirect('/'); // If the user is already logged in, redirect to the home page
    res.render('login', { title: 'Sign in - Ayrshire Hospice' }); // Render the login page with the title
};

// Controller to handle login form submission
exports.postLogin = async (req, res) => {
    const { username, password } = req.body; // Extract username and password from the request body
    const user = await User.findByUsername(username); // Find the user by username

    // If the user exists and the password matches
    if (user && await bcrypt.compare(password, user.password)) {
        req.session.userId = user._id; // Set the user ID in the session
        req.session.role = user.role; // Set the user role in the session
        res.redirect('/'); // Redirect to the home page
    } else {
        res.render('login', { error: 'Invalid credentials' }); // Render the login page with an error message
    }
};

exports.logout = (req, res) => {
    req.session.destroy(); // Destroy the session
    res.redirect('/'); // Redirect to the home page
};
