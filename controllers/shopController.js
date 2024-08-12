const Shop = require('../models/shopModel'); // Import the Shop model

// Controller to get a specific shop by name
exports.getShop = async (req, res) => {
    const shop = await Shop.findByName(req.params.name); // Find the shop by name from the database using the name parameter from the request
    if (!shop) return res.render('404'); // If the shop is not found, render the 404 page
    res.render('shop', { shop, title: shop.name }); // Render the shop page with the shop data and title
}

// Controller to get all shops
exports.getAllShops = async (req, res) => {
    const shops = await Shop.findAll(); // Find all shops from the database
    res.render('shops', { shops, title: 'Our Locations' }); // Render the shops page with the list of shops and title
};
