// Middleware to ensure the user is authenticated
exports.ensureAuth = (req, res, next) => {
    if (res.locals.userId) return next(); // If userId is present in locals, proceed to the next middleware
    res.redirect('/login'); // Otherwise, redirect to the login page
};

// Middleware to ensure the user is a manager
exports.ensureManager = (req, res, next) => {
    if (res.locals.isManager) return next(); // If isManager is true in locals, proceed to the next middleware
    res.render('404'); // Otherwise, render the 404 page
};

// Middleware to ensure the user is either a volunteer or a manager
exports.ensureVolunteerOrManager = (req, res, next) => {
    if (res.locals.isVolunteerOrManager) return next(); // If isVolunteerOrManager is true in locals, proceed to the next middleware
    res.render('404'); // Otherwise, render the 404 page
};