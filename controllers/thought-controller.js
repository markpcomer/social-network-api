const { Thought, User } = require('../models');

module.exports = {
    //Get all thoughts
    async getThoughts(req,res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    //Get a single thought
    async getSingleThought(req,res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID'});
            }
            res.json(thought);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    async createThought(req,res){
        try{
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thought: thought._id }},
                { runValidators: true, new: true}
            );

            if(!thought){
                return res.status(404).json({
                    message: 'Thought created, but no user with that ID',
                })
            }
            res.json('Created the thought');
        } catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
       try{
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true}   
                

            );

            if(!thoughtData){
                return res.status(404).json({ message: 'No thought with this ID'});
            }

            res.json(thoughtData);
      } catch(err) {
            console.log(err);
            res.status(500).json(err);
       }
    },
    async deleteThought(req, res) {
        try {
 
            const thought = await Thought.findOneAndDelete(
                { _id: req.params.thoughtId }
                )
            console.log("thought", thought)
            if(!thought) {
                return res.status(404).json({ message: 'No thought with this ID'});
            }

            const user = await User.findOneAndUpdate(
                { thought: req.params.thoughtId },
                { $pull: { thought: req.params.thoughtId }},
                { new: true}
            );

            // if(!user) {
            //     return res.status(404).json({ message: 'Thought created but no user with this ID' });
            // }

            res.json({ message: 'Thought deleted' });
        } catch(err){
            res.status(500).json(err);
        }
    },
    async addReaction(req, res) {
        try{
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reaction: req.body }},
                { runValidators: true, new: true }
                
            );

            if(!thought){
                return res.status(404).json({ message: 'No thought with this ID' });
            }

            res.json(thought);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    async deleteReaction(req,res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId},
                { $pull: { reaction: { reactionId: req.params.reactionId }}},
                { runValidators: true, new: true }
            );
            if(!thought){
                return res.status(404).json({ message: 'No thought with this ID' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};