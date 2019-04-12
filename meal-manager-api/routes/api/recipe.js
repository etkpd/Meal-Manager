const express = require('express');

// Recipe Model
const Recipe = require('../../models/Recipe');

const router = express.Router();

router.get("/", (req, res) => {
  const id = req.query.vegetable
  var regularexpression = new RegExp(`${id}`, 'i');

  
  Recipe.find({ ingredients: regularexpression}, 'title').then(theanswer => res.json(theanswer));
  
  console.log('query using ? ', id);


});


//example: extract parameter from url
router.get("/query::productId", (req, res) => {
  const id = req.params.productId
  
  
  console.log('product id recieved ', id);
  
  res.status(200).json({
    message: `${id} does on exist`,
    product_name: id  
  });
  
});


router.get("/findthatterm", (req, res) => {
  
  Recipe.find({ ingredients: /2% milk/i}, 'title').then(theanswer => res.json(theanswer));
  
  
});

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
    directions: req.body.directions,
    calories_per_serving : req.body.calories_per_serving,
    full_cook_time: req.body.full_cook_time,
    total_servings: req.body.total_servings
  });
  
  recipe
    .save()
    .then(item => {
      res.json(item);
      console.log("recipe was saved")
    }) 
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


module.exports = router;