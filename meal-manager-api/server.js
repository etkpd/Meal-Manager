const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')

require('dotenv').config();

const port = process.env.PORT || 5000;
const recipe = require('./routes/api/recipe')
const food = require('./routes/api/food')
const foodgroups = require('./routes/api/foodgroups')


const app = express();

// Set up Mongoose
mongoose.connect("mongodb://localhost:27017/meal_manager");

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/recipe', recipe);
app.use('/api/food', food);
app.use('/api/foodgroups', food);


app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});