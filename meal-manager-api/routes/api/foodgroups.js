const express = require('express');

// Recipe Model
const FoodGroups = require('../../models/FoodGroups');

const router = express.Router();


router.get("/filters", (req, res) => {
  console.log('get requested oh');

  FoodGroups.find({}).then(filters => res.json({ filters }));
});

router.post("/", async (req, res) => {
  const foodGroup = await FoodGroups.findOne({group_title: 'dessert'}); 
  console.log(foodGroup)
  await foodGroup.addFoodToFoodGroup('abaf');
  await foodGroup.save();
  res.json(foodGroup);
}); 

 /* router.post("/", (req, res) => {
  console.log('post was run');
  var foods = new FoodGroups({
    group_title: 'vegetable'
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
});  */





/* router.post("/", (req, res) => {
  console.log('post was run');
  var foods = new FoodGroups({
    group_title: req.body.group_title,
    foods: {
      id: req.body.id
    }
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
 */

module.exports = router;