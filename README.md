# Express Passport

Boilerplate for node.js server using Express, Mongoose/mongoDB. This project supports account creation based on email & password combination. Credentials are stored in mongoDB via mongoose. The server creates Jwt tokens, and the client places them in localstorage in the browser to preserve logged in state for each user. There is a boilerplate feature route which is only available to users who have created an account and are logged in

Web Token Authentication created with Bcrypt, Passport, and Jwt.

## Available Scripts

In the project directory, you can run:

```
npm install
```

```
npm run dev
```

## Installation

You need to add a **config.js** file to the root directory. Never push this file to a public repo, this will contain the secret for your hash creation. Your config file should include the following:

```
module.exports = {
  secret: 'anystring'
};
```

Replace _'anystring'_ with a string specific to your project. Must be String type.

To run the development server

Server operates on:

```
port :3090
```

MongoDB must be running and installed to use. [MongoDB Installation](https://docs.mongodb.com/manual/installation/)

Open a terminal window and start mongo with:

```
 *mongod*
```

You can get status logs also by running:

```
mongo
```

in a separate window.

You will find localhost:3090/signup and localhost:3090/signin routes exist.

Use Postman to create a user on the signup route.

```
{

"email": "test@example.com",
"password": "test"

}
```

To run with the corresponding client, see [ExpressClient](https://github.com/NCMoseley/ExpressClient).

## References

Thanks to Stephen Grider for this tutorial:

https://www.udemy.com/react-redux-tutorial
