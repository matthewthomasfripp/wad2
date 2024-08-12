const Datastore = require('nedb-promises'); // Import the NeDB promises library
const db = Datastore.create('db/shops.db'); // Create a new NeDB datastore for shops

class Shop {
    // Method to find all shops
    static async findAll() {
        return await db.find({}); // Fetch all shops from the database
    }

    // Method to find a shop by name
    static async findByName(name) {
        return await db.findOne({ name }); // Fetch a single shop by its name from the database
    }

    // Method to find a shop by ID
    static async findById(id) {
        return await db.findOne({ _id: id }); // Fetch a single shop by its ID from the database
    }
}

module.exports = Shop; // Export the Shop class