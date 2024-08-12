const Datastore = require('nedb-promises'); // Import the NeDB promises library
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const db = Datastore.create('db/users.db'); // Create a new NeDB datastore for users

class User {
    // Method to find a user by username
    static async findByUsername(username) {
        return await db.findOne({ username }); // Fetch a single user by their username from the database
    }

    // Method to find all volunteer users
    static async findAllVolunteers() {
        return await db.find({ role: 'volunteer' }); // Fetch all users with the role 'volunteer' from the database
    }

    // Method to find a user by ID
    static async findById(id) {
        return await db.findOne({ _id: id }); // Fetch a single user by their ID from the database
    }

    // Method to create a new user
    static async create(user) {
        user.password = await bcrypt.hash(user.password, 10); // Hash the user's password before saving
        return await db.insert(user); // Insert the new user into the database
    }

    // Method to update a user by ID
    static async updateById(id, update) {
        if (update.password) {
            update.password = await bcrypt.hash(update.password, 10); // Hash the updated password if it exists
        }
        return await db.update({ _id: id }, { $set: update }); // Update the user in the database by their ID
    }

    // Method to delete a user by ID
    static async deleteById(id) {
        return await db.remove({ _id: id }); // Remove the user from the database by their ID
    }
}

module.exports = User; // Export the User class
