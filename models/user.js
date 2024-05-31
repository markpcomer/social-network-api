// Importing dependencies from the mongoose library
const { Schema, model } = require('mongoose');

// Schema to create the User model
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
        friend: [
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

// Defining a virtual property 'friendCount'
//  --> returns the number of friends in the friends array
userSchema
    .virtual('friendCount')
    .get(function () {
       return this.friend.length;
    });

// Creates User model from userSchema
const User = model('User', userSchema);

// Turns User model into module & exports it
module.exports = User;

