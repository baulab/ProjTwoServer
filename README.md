# Project Two Server

## Environment

### Tools

1. [Node.js](http://nodejs.org)
2. [MongoDB](http://www.mongodb.org/)

### Node.js modules

1. [Express](http://expressjs.com) - Web application framework for node
2. [Mongoose](http://mongoosejs.com/) - Elegant mongodb object modeling for node.js
3. [Express-restify-mongoose](https://github.com/florianholzapfel/express-restify-mongoose) - library provides mongoose database models with a REST interface.

### Javascript frameworks

1. [jQuery 1.11.1](http://jquery.com)

### Usage

1. Clone the project into your workspace, then import it.
2. Make sure that you had installed [Node.js](http://nodejs.org) & [MongoDB](http://www.mongodb.org/).
3. Create folder `data` in project folder.
4. Open command prompt from MongoDB/bin(shift+right click), execute `mongod --dbpath=ProjTwoServerPath/data`
5. From step 4, execute `mongo`
6. Open new command prompt, execute `npm install` in project folder to install node modules.
7. execute `npm start` or `node app.js` to start the server at `localhost:3000`
