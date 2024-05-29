const router = require('express').Router();

const {
    getUsers,
    getSingleUser,//
    createUser,
    updateUser,//
    deleteUser,//
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router.route('/:userId/friend/friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;