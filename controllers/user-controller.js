const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
        console.log("getUsers");
        try {
            const user = await User.find()
            .select('-__v')

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get a single user
    async getSingleUser(req, res) {
        console.log("getUsers");
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v')
                .populate('friend')
                .populate('thought');

                if(!user){
                    return res.status(404).json({ message: 'No user with that ID'});
                }
                res.json(user);
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
            console.log("create user");
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
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
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if(!user){
            return res.status(404).json({ message: 'No user with that ID'});
            }

            await Thought.deleteMany({ _id: { $in: user.thought }});
            res.json({ message: 'User and thoughts deleted'})
        } catch(err) {
        res.status(500).json(err);
        }
    },
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friend: req.params.friendID }},
                { new: true}
            );

            if(!user){
                return res.status(404).json({ message: 'No user with that ID'});
            }

            res.json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId},
                { $pull: { friend: { friendId: req.params.friendId }}},
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

