const express = require('express');
const queryString = require('query-string');

// Recipe Model
const Food = require('../../models/Food');

const router = express.Router();


router.get("/filters", (req, res) => {
  console.log('get requested oh');

  Food.find({}).then(filters => res.json({ filters }));
});


router.post("/", (req, res) => {
  console.log('posting food');
  var foods = new Food({
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
  
  foods
    .save()
    .then(item => {
      res.json(item);
      console.log("foods were saved")
    }) 
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


module.exports = router;