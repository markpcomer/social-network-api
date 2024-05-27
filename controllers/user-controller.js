const { User, Thought } = require('./models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get a single user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userID })
                .select('-__v');

                if(!user){
                    return res.status(404).json({ message: 'No user with that ID'});
                }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userID });

            if(!user){
            return res.status(404).json({ message: 'No user with that ID'});
            }

            await Thought.deleteMany({ _id: { $in: user.thought }});
            res.json({ message: 'User and thoughts deleted'})
        } catch(err) {
        res.status(500).json(err);
        }
    }
};

