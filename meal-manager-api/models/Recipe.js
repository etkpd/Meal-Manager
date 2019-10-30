const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: { 
      type: String, 
      required: true 
    },
    author: { 
      type: String, 
      required: true 
    },
    image: { 
      type: String, 
      required: true 
    },
    ingredients_text: { 
      type: [String],
      required: true
    },
    ingredients: { 
      type: [String]
    },
    directions: { 
      type: [String],
      required: true 
    },
    calories_per_serving:{
      type: String,
      required: true,
    },
    cook_time:{
      type: String,
      required: true,
    },
    prep_time:{
      type: String,
      required: true,
    },
    total_servings:{
      type: String,
      required: true,
    }
});

schema.index({ ingredients: 1 });

module.exports = mongoose.model("Recipe", schema);