const express = require('express');

// Recipe Model
const Recipe = require('../../models/Recipe');

const router = express.Router();

router.get("/", (req, res) => {
  console.log('get requested');

  Recipe.find({}).then(recipes => res.json({ recipes }));
});

router.post("/", (req, res) => {
  console.log('post was run');
  var recipe = new Recipe({
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    ingredients: req.body.ingredients, 
    directions: req.body.directions
  });
  
  recipe.save().then(item => res.json(item));
});

module.exports = router;