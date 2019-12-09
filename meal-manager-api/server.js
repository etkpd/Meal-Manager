const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')

require('dotenv').config();

const port = process.env.PORT || 8001;
const recipe = require('./routes/api/recipe')
const food = require('./routes/api/food')
const foodgroups = require('./routes/api/foodgroups')


const app = express();

// Set up Mongoose
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true , useCreateIndex: true});

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/recipe', recipe);
app.use('/api/food', food);
app.use('/api/foodgroups', foodgroups);


app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});