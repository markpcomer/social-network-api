// Importing the express module & database connection object
const express = require('express');
const db = require('./config/connection');

// Importing the routes
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

// Creating an instance of the express application
const app = express();

// Middleware to parse incoming request bodies as URL encoded or JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Using the defined routes
app.use(routes);

// Listening for the 'open' event on the database connection
db.once('open', () => {
    // Starting the server to listen on the specified port
    app.listen(PORT, () => {
        // Logging a message indicating that the API is running and on which port
        console.log(`API running on port ${PORT}`);
    });
});
