const express = require('express');
const queryString = require('query-string');
var cloudinary = require('cloudinary').v2;
var formidable = require('formidable');
var http = require('http');
var util = require('util');

// Recipe Model
const Recipe = require('../models/Recipe');

const router = express.Router();

// @route    Get api/recipe
// @desc     
// @access
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

// @route    Get api/recipe/filter
// @desc     
// @access
router.get("/filter", (req, res) => {
  const query = req.query
  const pageNumber = req.query.page ? req.query.page : 1
  const nPerPage = 8;
  console.log(pageNumber)
  let stringAND = query.AND
  let stringNOT = query.NOT
  let stringOR = query.OR
  let andCriteriaArray = stringAND ? stringAND.split(',') : []  
  let notCriteriaArray = stringNOT ? stringNOT.split(',') : []
  let orCriteriaArray = stringOR ? stringOR.split(',') : []
  
  if(andCriteriaArray.length==0 && notCriteriaArray.length>0 && orCriteriaArray.length>0){
    Recipe.find({ $and :  [ { ingredients: { $all: orCriteriaArray } }, { ingredients: { $nin: notCriteriaArray } } ]}, null, { skip: (pageNumber-1)*nPerPage })
    .then( recipes => {
      res.json({recipes})
    });
  } else if(andCriteriaArray.length>0 && notCriteriaArray.length==0){
    Recipe.find( { ingredients: { $all: andCriteriaArray } }, null, { skip: (pageNumber-1)*nPerPage })
    .then( recipes => {
      res.json({recipes})
    });
  } else if(andCriteriaArray.length==0 && notCriteriaArray.length>0 && orCriteriaArray.length==0){
    Recipe.find({ ingredients: { $nin: notCriteriaArray } }, null, { skip: (pageNumber-1)*nPerPage })
    .then( recipes => {
      res.json({recipes})
    });
  } else if(andCriteriaArray.length==0 && notCriteriaArray.length==0 && orCriteriaArray.length>0){
    Recipe.find( { ingredients: { $in: orCriteriaArray } }, null, { skip: (pageNumber-1)*nPerPage })
    .then( recipes => {
      res.json({recipes})
    });
  } else if(andCriteriaArray.length==0 && notCriteriaArray.length==0 && orCriteriaArray.length==0){
    Recipe.find({}, null, { skip: (pageNumber-1)*nPerPage })
    .then( recipes => {
      res.json({recipes})
    });
  } else if(andCriteriaArray.length>0 && notCriteriaArray.length>0){
    Recipe.find({ $and :  [ { ingredients: { $all: andCriteriaArray } }, { ingredients: { $nin: notCriteriaArray } } ]}, null, { skip: (pageNumber-1)*nPerPage })
    .then( recipes => {
      res.json({recipes})
    });
  } 
});

// @route    Get api/recipe TEST TEST TEST
// @desc     
// @access
router.get("/query::productId", (req, res) => {
  const id = req.params.productId
  
  
  console.log('product id recieved ', id);
  
  res.status(200).json({
    message: `${id} does on exist`,
    product_name: id  
  });
  
});

// @route    Get api/recipe/findthatterm  TEST TEST TEST
// @desc     
// @access
router.get("/findthatterm", (req, res) => {
  
  Recipe.find({ ingredients: /2% milk/i}, 'title').then(theanswer => res.json(theanswer));


});

// @route    Post api/recipe TEST TEST TEST
// @desc     
// @access   
router.post("/", (req, res) => {
  console.log('post was run');
  var recipe = new Recipe({
    title: req.body.title,
    author: req.body.author,
    recipeNumber: req.body.recipeNumber,
    image: req.body.image,
    ingredients_text: req.body.ingredients_text, 
    ingredients: req.body.ingredients,
    directions: req.body.directions,
    calories_per_serving : req.body.calories_per_serving,
    cook_time: req.body.cook_time,
    prep_time: req.body.prep_time,
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

router.post("/imageupload", (req, res) => {
  console.log("image upload")
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
      if (err) {
        console.error(err.message);
        return;
      }
      let file = files.file.path
      cloudinary.uploader.upload(file, {upload_preset: 'epgjcf8l'})
      .then(function (image) {
        console.log(image)
        let photo = {}
        photo.thumb = image.secure_url
        photo.highres = image.eager[0].secure_url
        return res.json(photo);
      }) 
      return
    });
});

router.post("/recipeimageupload", (req, res) => {
  console.log("recipe image upload")
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
      if (err) {
        console.error(err.message);
        return;
      }
      let file = files.file.path
      cloudinary.uploader.upload(file, {upload_preset: 'RecipeUploadPreset'})
      .then(function (image) {
        console.log(image)
        let photo = {}
        photo.thumb = image.eager[0].secure_url
        photo.highres = image.secure_url
        return res.json(photo);
      }) 
      return
    });
});

router.post("/testrecipeimageupload", (req, res) => {
  console.log("test recipe image upload")

  let photo = {}
  photo.thumb = 'https://res.cloudinary.com/dq1pxgxdq/image/upload/c_scale,h_260,q_auto,w_auto/v1579286934/meal_manager/oexxjuzvmfeoieobydib.jpg'
  photo.highres = 'https://res.cloudinary.com/dq1pxgxdq/image/upload/v1579286934/meal_manager/oexxjuzvmfeoieobydib.jpg'

  res.json(photo)
});

router.post("/addrecipe", (req, res) => {
  console.log('adding recipe')
  console.log(req.body)
  let recipeDetails = req.body.recipeDetails

  const recipe = new Recipe({
    title: recipeDetails.recipeTitle,
    recipeNumber: 4,
    photo: {
      thumb: recipeDetails.imageLowResLink,
      highres: recipeDetails.imageLink
    },
    ingredients_text: recipeDetails.ingredientsText,
    ingredients: recipeDetails.ingredient,
    directions: recipeDetails.directions,
    calories_per_serving: recipeDetails.recipeNutritionDetails.nf_calories/recipeDetails.numberOfServings,
    cook_time_hr: recipeDetails.CookTimeHour,
    cook_time_min: recipeDetails.CookTimeMinute,
    prep_time_hr: recipeDetails.PrepTimeHour,
    prep_time_min: recipeDetails.PrepTimeMinute,
    total_servings: recipeDetails.numberOfServings,
    nutritionDetails: {
      serving_weight_grams: recipeDetails.recipeNutritionDetails.serving_weight_grams,
      nf_calories: recipeDetails.recipeNutritionDetails.nf_calories,
      nf_total_fat: recipeDetails.recipeNutritionDetails.nf_total_fat,
      nf_saturate_fat: recipeDetails.recipeNutritionDetails.nf_saturate_fat,
      nf_polyunsaturated_fat: recipeDetails.recipeNutritionDetails.nf_polyunsaturated_fat,
      nf_monounsaturated_fat: recipeDetails.recipeNutritionDetails.nf_monounsaturated_fat,
      nf_cholesterol: recipeDetails.recipeNutritionDetails.nf_cholesterol,
      nf_sodium: recipeDetails.recipeNutritionDetails.nf_sodium,
      nf_total_carbohydrate: recipeDetails.recipeNutritionDetails.nf_total_carbohydrate,
      nf_dietary_fiber: recipeDetails.recipeNutritionDetails.nf_dietary_fiber,
      nf_sugars: recipeDetails.recipeNutritionDetails.nf_sugars,
      nf_protein: recipeDetails.recipeNutritionDetails.nf_protein,
      nf_vitamin_d: recipeDetails.recipeNutritionDetails.nf_vitamin_d,
      nf_calcium: recipeDetails.recipeNutritionDetails.nf_calcium,
      nf_iron: recipeDetails.recipeNutritionDetails.nf_iron,
      nf_potassium: recipeDetails.recipeNutritionDetails.nf_potassium,
    }
  })

  recipe
    .save()
    .then((recipe)=>{
      res.json(recipe.recipeNumber)
    })
})

router.get("/getrecipe", (req, res) => {
  console.log(req.query.id)
  Recipe.findOne({ recipeNumber: req.query.id})
  .then(recipe => {
    res.json({recipe})
  });
})

module.exports = router;