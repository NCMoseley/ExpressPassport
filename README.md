# Express Passport

Boilerplate for node.js server using Express, Mongoose/mongoDB.

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

You need to add a config file to the root directory. Never push this file to a public repo, this will contain the secret for your hash creation. Your config file should include the following:

```
module.exports = {
  secret: 'anystring'
};
```

Replace _'anystring'_ with something specific to your project.

To run the development server

Server operates on:

```
port :3090
```

You will find localhost:3090/signup and localhost:3090/signin routes exist.

Use Postman to create a user on the signup route.

```
{

"email": "test@example.com",
"password": "test"

}
```

## References

Thanks to Stephen Grider for this tutorial:

https://www.udemy.com/react-redux-tutorial

```

```
