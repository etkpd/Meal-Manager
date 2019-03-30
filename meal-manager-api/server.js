const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')

require('dotenv').config();

const port = process.env.PORT || 5000;
const api = require('./routes/api/recipe')

const app = express();

// Set up Mongoose
mongoose.connect("mongodb://localhost:27017/meal_manager");

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/recipe', api);


app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});