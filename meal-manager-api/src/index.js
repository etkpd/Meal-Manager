const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
var cloudinary = require('cloudinary').v2;

require('dotenv').config();

const port = process.env.PORT || 8001;
const recipe = require('./api/recipe')
const food = require('./api/food')
const foodgroups = require('./api/foodgroups')


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

// Set up Mongoose
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true , useCreateIndex: true});

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/recipe', recipe);
app.use('/api/food', food);
app.use('/api/foodgroups', foodgroups);

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});