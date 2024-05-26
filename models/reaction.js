const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            minLength: 1,
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
          virtuals: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;

