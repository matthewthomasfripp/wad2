const Item = require('../models/itemModel'); // Import the Item model
const Shop = require('../models/shopModel'); // Import the Shop model

// Controller to get all items
exports.getAllItems = async (req, res) => {
    const dbItems = await Item.findAll(); // Fetch all items from the database
    const dbShops = await Shop.findAll(); // Fetch all shops from the database

    // Map through the items and attach the corresponding shop name
    const items = dbItems.map(item => {
        const shop = dbShops.find(shop => shop.name === item.shop).name;
        return {
            ...item,
            shop,
        };
    });

    res.render('items', { items }); // Render the items page with the list of items
};

// Controller to render the add item page
exports.getAddItem = async (req, res) => {
    const shops = await Shop.findAll(); // Fetch all shops from the database
    res.render('addItem', { shops }); // Render the add item page with the list of shops
};

// Controller to handle the submission of a new item
exports.postAddItem = async (req, res) => {
    const { name, description, price, shop } = req.body; // Extract item details from the request body
    await Item.create({ name, description, price, shop }); // Create a new item in the database
    res.redirect('/items'); // Redirect to the items page
};

// Controller to render the edit item page
exports.getEditItem = async (req, res) => {
    const item = await Item.findById(req.params.id); // Fetch the item by ID from the database
    if (!item) return res.render('404'); // If the item is not found, render the 404 page

    const dbShops = await Shop.findAll(); // Fetch all shops from the database

    // Map through the shops and mark the selected shop
    const shops = dbShops.map(shop => ({ selected: shop.name === item.shop, ...shop }));

    res.render('editItem', { item, shops }); // Render the edit item page with the item and list of shops
};

// Controller to handle the submission of an edited item
exports.postEditItem = async (req, res) => {
    const { name, description, price, shop } = req.body; // Extract updated item details from request body
    await Item.updateById(req.params.id, { name, description, price, shop }); // Update the item in the database
    res.redirect('/items'); // Redirect to the items page
};

// Controller to handle the deletion of an item
exports.deleteItem = async (req, res) => {
    await Item.deleteById(req.params.id); // Delete the item by ID from the database
    res.redirect('/items'); // Redirect to the items page
};