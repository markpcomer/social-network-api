 
# NoSQL: Social Network API

# ![License:](https://img.shields.io/badge/License-MIT_License-blue)

## Table of Contents 

* [Description](#description)
* [Installation](#installation)
* [License](#license)
* [Usage](#usage)
* [Video](#video)
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)

___

## [Description](#description)
This is a Social Network API built with MongoDB, Mongoose, Express.js, and JavaScript. It allows users to perform CRUD operations using a NoSQL database and Insomnia. This API includes models for users, user's thoughts & reactions, as well as user friends. 

___

## [Installation](#installation)
Clone the repository from Github. Open the cloned repository in the code editor of your choosing. Install mongoose & express in the terminal. Use `npm run seed` to seed the database, and `node server.js` to connect to Insomnia.

___

## [License](#license)
# ![License:](https://img.shields.io/badge/License-MIT_License-blue)     
Licensed by MIT_License:    
https://opensource.org/license/mit    

___

## [Usage](#usage)

Use Insomnia to test http://localhost:3001 with CRUD operations: GET, POST, PUT, & DELETE routes for the following categories: users, thoughts, friends, & reactions. Below is a guide for testing all of the available API routes: 

Each endpoint must include the necessary data in the request body or URL parameters as specified.

1. GET /api/user - get all users
2. GET /api/user/:userId - get a single user by ID
3. POST /api/user - create a new user
4. PUT /api/user/:userId - update a user by ID
5. DELETE /api/user/:userId - delete a user by ID
6. GET /api/thought - get all thoughts
7. GET /api/thought/:thoughtId - get a single thought by ID
8. POST /api/thought - create a new thought
9. PUT /api/thought/:thoughtId - update a thought by ID
10. DELETE /api/thought/:thoughtId - delete a thought by ID
11. POST /api/thought/:thoughtId/reaction - add a reaction to a thought
12. DELETE /api/thought/:thoughtId/reaction/:reactionId - remove a reaction from a thought
13. POST /api/users/:userId/friend/:friendId - add a friend to a user's friend list
14. DELETE /api/users/:userId/friend/:friendId - remove a friend from a user's friend list

___

## [Video](#video)
Click below to watch a demonstration video.

https://drive.google.com/file/d/11QdegdkfSqwP0-SANPez7qloTX9-86Aj/view?usp=sharing

___

## [Contributing](#contributing)
Please contact the author regarding any and all contributions. Contact information can be found below.

___

## [Testing](#testing)
No testing necessary.

___

## [Questions](#questions)
My GitHub is at (https://github.com/markpcomer)
<br>
<br>
For additional questions, please reach me at markpcomer@gmail.com.
