const { Schema, model } = require('mongoose');

// Scheme to create the user model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // Validates email address
            validate: {
                validator: function (value) {
                  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                },
                message: 'Invalid email address format',
              },
        },
        thought: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
            }
        ],
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User',
            },
        ],
    },
        {
        toJSON: {
            virtuals: true,
        },
            id: false,
        }  
);

userSchema.virtual('friendCount')
    .get(function () {
        return `${this.friends}`;
    });

const User = model('user', userSchema);

module.exports = User;

