// Importing the Router module from Express.js to create a router object
const router = require('express').Router();

// Importing routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// Adding endpoints to routes
router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);

// Exporting the router object 
module.exports = router;