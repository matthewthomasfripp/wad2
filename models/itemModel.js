const Datastore = require('nedb-promises'); // Import the NeDB promises library
const db = Datastore.create('db/items.db'); // Create a new NeDB datastore for items

class Item {
    // Method to find all items
    static async findAll() {
        return await db.find({}); // Fetch all items from the database
    }

    // Method to find an item by ID
    static async findById(id) {
        return await db.findOne({ _id: id }); // Fetch a single item by its ID from the database
    }

    // Method to create a new item
    static async create(item) {
        return await db.insert(item); // Insert a new item into the database
    }

    // Method to update an item by ID
    static async updateById(id, update) {
        return await db.update({ _id: id }, { $set: update }); // Update an existing item in the database by its ID
    }

    // Method to delete an item by ID
    static async deleteById(id) {
        return await db.remove({ _id: id }); // Remove an item from the database by its ID
    }
}

module.exports = Item; // Export the Item class
