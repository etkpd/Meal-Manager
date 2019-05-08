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
      type: String,
      required: true
    },
    serving_size_grams: {
      type: Number,
      required: true
    },
    total_fat: {
      type: Number,
      required: true
    },
    saturated_fat: {
      type: Number,
      required: true
    },
    trans_fat: {
      type: Number,
      required: true
    },
    polyunsaturated_fat: {
      type: Number,
      required: true
    },
    monounsaturated_fat: {
      type: Number,
      required: true
    },
    cholesterol: {
      type: Number,
      required: true
    },
    sodium: {
      type: Number,
      required: true
    },
    potassium: {
      type: Number,
      required: true
    },
    total_carbohydrates: {
      type: Number,
      required: true
    },
    dietary_fiber: {
      type: Number,
      required: true
    },
    sugars: {
      type: Number,
      required: true
    },
    protein: {
      type: Number,
      required: true
    },
    vitamin_a: {
      type: Number,
      required: true
    },
    vitamin_c: {
      type: Number,
      required: true
    },
    calcium: {
      type: Number,
      required: true
    },
    iron: {
      type: Number,
      required: true
    }
});

module.exports = mongoose.model("Food", schema);