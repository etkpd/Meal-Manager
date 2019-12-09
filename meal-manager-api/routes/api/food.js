const express = require('express');
const queryString = require('query-string');
const axios = require('axios')

// Recipe Model
const Food = require('../../models/Food');
const FoodGroups = require('../../models/FoodGroups');

const router = express.Router();

// @route    Post api/food
// @desc     Create database entry for food item, then add reference to newly created item in foodgroups collection
// @access   Private
router.post("/", (req, res) => {
  console.log('posting food');
  const food = new Food({
    group_title: req.body.group_title,
    food_name: req.body.food_name,
    calories: req.body.calories,
    serving_size_grams:req.body.serving_size_grams,
    total_fat:req.body.total_fat,
    saturated_fat:req.body.saturated_fat,
    trans_fat:req.body.trans_fat,
    polyunsaturated_fat:req.body.polyunsaturated_fat,
    monounsaturated_fat:req.body.monounsaturated_fat,
    cholesterol:req.body.cholesterol,
    sodium:req.body.sodium,
    potassium:req.body.potassium,
    total_carbohydrates:req.body.total_carbohydrates,
    dietary_fiber:req.body.dietary_fiber,
    sugars:req.body.sugars,
    protein:req.body.protein,
    vitamin_a:req.body.vitamin_a,
    vitamin_c:req.body.vitamin_c,
    calcium:req.body.calcium,
    iron:req.body.iron
  });
  
  food
    .save()
    .then(item => {
      const {_id, food_name, group_title} = item;

      FoodGroups.findOne({group_title})
        .then(foodgroup => {
          foodgroup.addFoodToFoodGroup(_id, food_name);
          foodgroup.save()
          console.log("foods were saved");
          return res.json(foodgroup);
        }
      )
    }) 
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


// @route    Get api/food/filters
// @desc     Sends filter categories and filter options for use in CriteriaFilters component
// @access   Private
router.get("/filters", (req, res) => {
  console.log('get requested oh');
  FoodGroups.find({})
    .then((filters) => {
      res.json({ 
        filters: filters.map(
          filter =>({
          group_title: filter.group_title,
          foods: filter.foodsRefList.map(
            foodRef=>(foodRef.food_name)
          )   
          })
        )
      })  
      
    });
});

// @route    Get api/food/ingredient
// @desc     Sends ingredient nutrition infomation. Acquires nutrition infomation from Nutritionix API 
// @access   Private
router.post("/ingredient", (req, res) => {
  const ingredient = req.body.ingredient
  
  axios.request({
    url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    method: 'post',
    data: {
      query: ingredient
    },
    headers: {
      'Content-Type': 'application/json', 
      'x-app-id': process.env.NUTRITIONIX_APP_ID, 
      "x-app-key": process.env.NUTRITIONIX_APP_KEY
    }
  })
    .then(response => {
      res.json(response.data.foods[0])
    })
});

module.exports = router;


