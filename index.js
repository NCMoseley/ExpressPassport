//  Main starting point of the app
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const app = express();
app.use(passport.initialize());
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// Mongo DB setup

mongoose
  .connect(
    'mongodb://localhost:27017/auth',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('Mongo Error:'));

//  App Setup

// app.use(morgan('combined')); // log DB requests to the console
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//  Server Setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log('Server listening on:', port);
