const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userSeedData, thoughtSeedData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async() => {
    console.log('connected');

    const thoughtCount = await Thought.countDocuments();
    const userCount = await User.countDocuments();
    if (thoughtCount>0) {
        await Thought.collection.drop();
    }
    if (userCount>0) {
        await User.collection.drop();
    }

    const user = userSeedData;
    const thought = thoughtSeedData;

    await User.collection.insertMany(user);
    await Thought.collection.insertMany(thought);

    console.table(user);
    console.table(thought);
    console.info('Seeding complete! 🌱');
    process.exit(0);
})

