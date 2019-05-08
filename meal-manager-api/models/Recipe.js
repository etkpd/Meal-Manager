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
    ingredients: { 
      type: [String],
      required: true
    },
    directions: { 
      type: [String],
      required: true 
    },
    calories_per_serving:{
      type: String,
      required: true,
    },
    full_cook_time:{
      type: String,
      required: true,
    },
    total_servings:{
      type: String,
      required: true,
    },
    ingredient_ids:{
      type: [Number],
      required: true,
    }
});

schema.index({ ingredients: 'text' });

module.exports = mongoose.model("Recipe", schema);