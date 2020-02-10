// Requires
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// Dotenv
require('dotenv').config({
  path: path.join(__dirname, 'env/.env'),
});

// Database connection
require('./database').connect();

// New server
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const auth = require('./routes/auth');
const recipes = require('./routes/recipes');

// Routing
app.use('/auth', auth);
app.use('/recipes', recipes);

// Static
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
try {
  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server on port ${process.env.SERVER_PORT}.`);
  });
} catch (e) {
  console.error(e);
}