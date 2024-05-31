// Importing the connection object from connection.js
const connection = require('../config/connection');

// Importing the User and Thought models, & seed data
const { User, Thought } = require('../models');
const { userSeedData, thoughtSeedData } = require('./data');

connection.on('error', (err) => err);

// Executing code once the connection is open
connection.once('open', async() => {
    console.log('connected');

    // Counting existing documents in the Thought and User collections
    // If documents exist, then they're dropped
    const thoughtCount = await Thought.countDocuments();
    const userCount = await User.countDocuments();

    if (thoughtCount > 0) {
        await Thought.collection.drop();
    }

    if (userCount > 0) {
        await User.collection.drop();
    }

    // Storing seed data for users and thoughts
    const user = userSeedData;
    const thought = thoughtSeedData;

    // Inserting seed data into the User and Thought collections
    await User.collection.insertMany(user);
    await Thought.collection.insertMany(thought);

    // Logging the inserted user and thought data in tabular format
    console.table(user);
    console.table(thought);

    // Logging a message indicating that seeding is complete
    console.info('Seeding complete! 🌱');

    // Exits process
    process.exit(0);
})
