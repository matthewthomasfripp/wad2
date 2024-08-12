const express = require('express'); // Import the express library
const path = require('path'); // Import the path library
const mustacheExpress = require('mustache-express'); // Import the mustache-express library
const session = require('express-session'); // Import the express-session library
const bodyParser = require('body-parser'); // Import the body-parser library

const app = express(); // Create an instance of the express application

app.engine('mustache', mustacheExpress()); // Register mustache as the template engine
app.set('view engine', 'mustache'); // Set mustache as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the directory for views

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(session({
    secret: 'secret_key', // Secret key for session encryption
    resave: false, // Do not save session if unmodified
    saveUninitialized: false, // Do not create session until something is stored
}));

// Middleware to set local variables for the session
app.use((req, res, next) => {
    res.locals.userId = req.session.userId; // Set userId from session to locals
    res.locals.isVolunteer = req.session.role === 'volunteer'; // Set isVolunteer based on session role
    res.locals.isManager = req.session.role === 'manager'; // Set isManager based on session role
    res.locals.isVolunteerOrManager = res.locals.isVolunteer || res.locals.isManager; // Set isVolunteerOrManager based on session roles
    next(); // Proceed to the next middleware
});

const authRoutes = require('./routes/authRoutes'); // Import authentication routes
const itemRoutes = require('./routes/itemRoutes'); // Import item routes
const userRoutes = require('./routes/userRoutes'); // Import user routes
const shopRoutes = require('./routes/shopRoutes'); // Import shop routes

app.use('/', authRoutes); // Use authentication routes for the root path
app.use('/items', itemRoutes); // Use item routes for the '/items' path
app.use('/users', userRoutes); // Use user routes for the '/users' path
app.use('/shops', shopRoutes); // Use shop routes for the '/shops' path
app.all('*', (req, res) => {
    res.render('404'); // Render the 404 page for any unmatched routes
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000'); // Start the server on port 3000
});