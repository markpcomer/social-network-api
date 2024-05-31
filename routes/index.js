// Importing the Router module from Express.js to create a router object
const router = require('express').Router();

// Importing routes from api folder
const apiRoutes = require('./api');

// Adding endpoint 
router.use('/api', apiRoutes);

// Middleware to handle requests to routes that don't exist
router.use((req, res) => {
  // Response for non-existent route
  return res.send('Wrong route!!! ./routes/index.js');
});

// Exporting the router object 
module.exports = router;