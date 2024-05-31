// Importing dependencies from the mongoose library
const { Schema, model } = require('mongoose');

// Imports reactionSchema to be inputted into thoughtSchema
const reaction = require('./reaction');

// Schema to create the Thought model
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
          getters: true,
        },
        id: false,
    }
);

// Defining a virtual property 'reactionCount'
//  --> returns the number of reactions
thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reaction.length;
    });

// Creates Thought model from thoughtSchema
const Thought = model('Thought', thoughtSchema);

// Turns Thought model into module & exports it
module.exports = Thought;