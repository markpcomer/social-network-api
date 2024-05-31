// Importing the Router module from Express.js to create a router object
const router = require('express').Router();

// Importing controller functions from thought-controller.js
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

// Route for handling GET and POST requests to the root endpoint ('/')
router.route('/')
    .get(getThoughts) 
    .post(createThought);

// Route for handling GET, PUT, and DELETE requests to endpoint ('/:thoughtId')
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// Route for handling POST requests to add a reaction to a thought ('/:thoughtId/reaction')
router.route('/:thoughtId/reaction')
    .post(addReaction);

// Route for handling DELETE requests to delete a reaction from a thought ('/:thoughtId/reaction/:reactionId')
router.route('/:thoughtId/reaction/:reactionId')
    .delete(deleteReaction);

// Exporting the router object
module.exports = router;
