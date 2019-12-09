const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    food_name: { 
      type: String,
      required: true 
    },
    group_title: {
      type: String,
      required: true
    },
    calories: {
      type: String
    },
    serving_size_grams: {
      type: Number
    },
    total_fat: {
      type: Number
    },
    saturated_fat: {
      type: Number
    },
    trans_fat: {
      type: Number
    },
    polyunsaturated_fat: {
      type: Number
    },
    monounsaturated_fat: {
      type: Number
    },
    cholesterol: {
      type: Number
    },
    sodium: {
      type: Number
    },
    potassium: {
      type: Number
    },
    total_carbohydrates: {
      type: Number
    },
    dietary_fiber: {
      type: Number
    },
    sugars: {
      type: Number
    },
    protein: {
      type: Number
    },
    vitamin_a: {
      type: Number
    },
    vitamin_c: {
      type: Number
    },
    calcium: {
      type: Number
    },
    iron: {
      type: Number
    }
});

module.exports = mongoose.model("Food", schema);