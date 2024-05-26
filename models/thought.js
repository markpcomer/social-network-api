const { Schema, model } = require('mongoose');

const reaction = require('./reaction');

const thoughtSchema = new Schema(
    {
       thoughtText: {
            type: String,
            required: true,
            minLength: 1, 
            maxLength: 280,
       }, 
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => {
                return new Date(timestamp).toISOString();
            }
        },
        username: {
            type: String,
            required: true,
        },
        reaction: [reaction]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reaction.length;
    });


const Thought = model('thought', thoughtSchema);

module.exports = Thought;