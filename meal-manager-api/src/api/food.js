const express = require('express');
const queryString = require('query-string');
const axios = require('axios')
var cloudinary = require('cloudinary').v2;

// Recipe Model
const Food = require('../models/Food');
const FoodGroups = require('../models/FoodGroups');

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


/* // @route    Get api/food/filters
// @desc     Sends filter categories and filter options for use in CriteriaFilters component
// @access   Private
router.get("/filters", (req, res) => {
  console.log('get requested oh');
  FoodGroups.find({})
    .then((filters) => {
      res.json({ 
        filters: filters.map(
          filter =>{
            if(filter.group_title != "unsorted"){
            return {
              group_title: filter.group_title,
              foods: filter.foodsRefList.map(
                foodRef=>(foodRef.food_name)
                )   
              }
            }
          }
        )
      })  
    });
});
 */

// @route    Get api/food/filters
// @desc     Sends filter categories and filter options for use in CriteriaFilters component
// @access   Private
router.get("/filters", (req, res) => {
  console.log('get requested oh');
  FoodGroups.find({})
    .then((filters) => {
      res.json({ 
        filters: filters.reduce(
          (filteredArray, filter) =>{
            if(filter.group_title !== "unsorted"){
              let someNewValue = {
              group_title: filter.group_title,
              foods: filter.foodsRefList.map(
                foodRef=>(foodRef.food_name)
                )   
              }
              filteredArray.push(someNewValue)
            }
              return filteredArray
          }
        , [])
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
    const data = response.data.foods[0]
    const fullNutrients = response.data.foods[0].full_nutrients
    
    const foodGroupByTag = ["unsorted", "dairy", "unsorted", "fruit", "vegetable", "grain", "fat", "legume", "unsorted", "unsorted"]
    const set1 = new Set([605, 646, 645, 328, 301, 303]);
    const map1 = new Map([
      [605, "nf_trans_fat"], 
      [646, "nf_polyunsaturated_fat"], 
      [645, "nf_monounsaturated_fat"], 
      [328, "nf_vitamin_d"], 
      [301, "nf_calcium"], 
      [303, "nf_iron"]
    ]);

    let decodedData = {}
    fullNutrients.forEach(obj=>{
      if(set1.has(obj.attr_id)){
        const nutrition_name = map1.get(obj.attr_id)
        decodedData[`${nutrition_name}`]= obj.value
      }
    })

    Food
      .find({ $text : { $search : `\"${data.food_name}\"` } }, '-_id -__v')
      .then((food)=>{
        const foodLocalDatabase = food[0]
        if (foodLocalDatabase === undefined){
          let foodDetails = {
            food_name: data.food_name,
            serving_qty: data.serving_qty,
            serving_unit: data.serving_unit,
            serving_weight_grams: data.serving_weight_grams, 
            nf_calories: data.nf_calories,
            nf_total_fat: data.nf_total_fat,
            nf_saturated_fat: data.nf_saturated_fat,
            nf_trans_fat: decodedData.nf_trans_fat,
            nf_polyunsaturated_fat: decodedData.nf_polyunsaturated_fat,
            nf_monounsaturated_fat: decodedData.nf_monounsaturated_fat,
            nf_cholesterol: data.nf_cholesterol,
            nf_sodium: data.nf_sodium ,
            nf_total_carbohydrate: data.nf_total_carbohydrate,
            nf_dietary_fiber: data.nf_dietary_fiber,
            nf_sugars: data.nf_sugars,
            nf_protein: data.nf_protein,
            nf_vitamin_d: decodedData.nf_vitamin_d,
            nf_calcium: decodedData.nf_calcium,
            nf_iron: decodedData.nf_iron,
            nf_potassium: data.nf_potassium,
            photo: {
              thumb:'',
              highres:''
            },
            food_group: foodGroupByTag[data.tags.food_group]
          }
          console.log("data from api,", data.food_name)
          cloudinary.uploader.upload(data.photo.highres, {upload_preset: 'epgjcf8l'})
          .then(function (image) {
            foodDetails.photo.thumb = image.secure_url
            foodDetails.photo.highres = image.eager[0].secure_url
            const newFoodEntry = new Food(foodDetails);
            newFoodEntry
              .save()
              .then(newlyAddedFood => {
                const {_id, food_name, food_group} = newlyAddedFood;
                FoodGroups.findOne({group_title: food_group})
                  .then(foodgroup => {
                    foodgroup.addFoodToFoodGroup(_id, food_name);
                    foodgroup.save()
                    return res.json(foodDetails);
                  })
              }) 
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          })
          .catch(function (err) {
            if (err) { console.warn(err); }
          }); 

        } else {
            let foodDetails = {
              food_name: data.food_name,
              serving_qty: data.serving_qty,
              serving_unit: data.serving_unit ,
              serving_weight_grams: data.serving_weight_grams, 
              nf_calories: data.nf_calories,
              nf_total_fat: data.nf_total_fat,
              nf_saturated_fat: data.nf_saturated_fat,
              nf_trans_fat: data.nf_trans_fat,
              nf_polyunsaturated_fat: data.nf_polyunsaturated_fat,
              nf_monounsaturated_fat: data.nf_monounsaturated_fat,
              nf_cholesterol: data.nf_cholesterol,
              nf_sodium: data.nf_sodium ,
              nf_total_carbohydrate: data.nf_total_carbohydrate,
              nf_dietary_fiber: data.nf_dietary_fiber,
              nf_sugars: data.nf_sugars,
              nf_protein: data.nf_protein,
              nf_vitamin_d: data.nf_vitamin_d,
              nf_calcium: data.nf_calcium,
              nf_iron: data.nf_iron,
              nf_potassium: data.nf_potassium,
              photo: foodLocalDatabase.photo,
              food_group: foodLocalDatabase.food_group
            }
            console.log('data from local database,', data.food_name)
            res.json(foodDetails)
        }
      })
  })
  .catch(err => {
    res.status(500).json({
      error: 'could not find ingredient in Nutritionix Api |)o(|'
    })
  })
});

module.exports = router;