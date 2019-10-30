const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  group_title: {
    type: String,
    required: true
  },
  foodsRefList:[
    {
      foodID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
      },
      food_name: {
        type: String,
        required: true
      }
    }
  ]
});

schema.methods.addFoodToFoodGroup = function addFoodToFoodGroup(foodID, food_name){
  this.foodsRefList.push({foodID, food_name});
}

module.exports = mongoose.model("FoodGroups", schema);