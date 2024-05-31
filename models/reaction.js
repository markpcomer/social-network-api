// Importing dependencies from the mongoose library
const { Schema, Types } = require('mongoose');

// Schema to create the Reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => {
                return new Date(timestamp).toISOString();
            }
        },
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
    }
);

// Exports reactionSchema to be used in thought.js
module.exports = reactionSchema;


