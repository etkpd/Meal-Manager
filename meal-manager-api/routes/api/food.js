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
  console.log('post was run');
  var foods = new Food({
    group_title: req.body.group_title,
    foods: req.body.foods,
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