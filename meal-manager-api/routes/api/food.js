const express = require('express');
const queryString = require('query-string');

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


// @route    Post api/food/filters
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

module.exports = router;