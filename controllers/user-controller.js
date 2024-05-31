const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
            const user = await User.find()
            .select('-__v')
            .populate('friend')
            .populate('thought')

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get a single user by ID
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v')
                .populate('friend')
                .populate('thought')

                if(!user){
                    return res.status(404).json({ message: 'No user with that ID'});
                }
                res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Update user by ID
    async updateUser(req, res){
        try{
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if(!user){
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    // Delete user by ID
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete(
                { _id: req.params.userId });

            if(!user){
            return res.status(404).json({ message: 'No user with that ID'});
            }

            await Thought.deleteMany({ _id: { $in: user.thought }});
            res.json({ message: 'User and thoughts deleted'})
        } catch(err) {
        res.status(500).json(err);
        }
    },
    // Add friend to user's friend list
    async addFriend(req, res) {
        try {
            console.log("add friend");
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friend: req.params.friendId }},
                { new: true },
            );

            if(!user){
                return res.status(404).json({ message: 'No user with that ID'});
            }

            res.json(user);
        } catch(err) {
            res.status(500).json(err);
            console.log("Not working");
        }
    },
    // Delete friend to user's friend list by ID
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friend: req.params.friendId }},
                { runValidators: true, new: true }
            );

            if(!user){
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);

        } catch(err) {
            res.status(500).json(err);
        }
    }
};

