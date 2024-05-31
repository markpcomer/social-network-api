// Importing the mongoose library
const { connect, connection } = require('mongoose');

//  MongoDB database connection using the MongoDB URI
const connectionString = 'mongodb://127.0.0.1:27017/studentsDB';

connect(connectionString);

// Exporting the connection to the database as a module
module.exports = connection;