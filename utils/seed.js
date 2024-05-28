const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userSeedData, thoughtSeedData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async() => {
    console.log('connected');

    let thoughtCheck = await connection.db.listCollections({ name: 'thought' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thought');
    }

    let userCheck = await connection.db.listCollections({ name: 'user '}).toArray();
    if (userCheck.length) {
        await connection.dropCollection('user');
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

