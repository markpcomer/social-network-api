// Importing the Router module from Express.js to create a router object
const router = require('express').Router();

// Importing controller functions from user-controller.js
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// Route for handling GET and POST requests to the root endpoint ('/')
router.route('/')
    .get(getUsers)
    .post(createUser);

// Route for handling GET, PUT, and DELETE requests to endpoint ('/:userId')
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// Route for handling GET, PUT, and DELETE requests to endpoint ('/:userId/friend/:friendId')
router.route('/:userId/friend/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

// Exporting the router object
module.exports = router;