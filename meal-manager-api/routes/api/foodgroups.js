const express = require('express');

// Recipe Model
const FoodGroups = require('../../models/FoodGroups');

const router = express.Router();


router.get("/filters", (req, res) => {
  console.log('get requested oh');

  FoodGroups.find({}).then(filters => res.json({ filters }));
});


router.post("/", (req, res) => {
  console.log('post was run');
  var foods = new FoodGroups({
    group_title: req.body.group_title,
    foods: {
      title: req.body.food,
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


module.exports = router;