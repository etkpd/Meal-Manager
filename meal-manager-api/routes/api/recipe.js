const express = require('express');
const queryString = require('query-string');

// Recipe Model
const Recipe = require('../../models/Recipe');

const router = express.Router();


router.get("/", (req, res) => {
  console.log('get requested');
  const pageNumber = 1;
  const nPerPage = 16; 
  Recipe.find().skip((pageNumber-1)*nPerPage).limit(16).then(recipes => res.json({ recipes }));
  //future work: only send json object containing calories, servings, cook time, and image.
});
 
/* 
router.get("/", (req, res) => {
  let recipe_query =  req.query.recipe
  let array_of_recipes

  if (typeof recipe_query === 'string'){
    array_of_recipes = [recipe_query];
  }else{
    array_of_recipes = recipe_query;
  }

  console.log(array_of_recipes)

  //let id = array_of_recipes_2.join(' ')
  let id = "\\\"whole wheat bread\"\\";
  

  const pageNumber = 1;// retrieve exact number from url query
  const nPerPage = 12; 

  Recipe.find({ $text: { $search: `${id}`}}).skip((pageNumber-1)*nPerPage).limit(12).then(recipes => res.json({ recipes })); 
  
  console.log('query using ? ',id);

  //look up _id for each individual ingredient from food database
  //Use _id to search Recipe({[ingredient_ids]}) for any matches. 
});  
*/

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