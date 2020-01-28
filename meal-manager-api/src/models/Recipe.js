const mongoose = require("mongoose");
const Counter = require("./Counter")

const schema = new mongoose.Schema({
    title: { 
      type: String, 
      required: true 
    },
    recipeNumber: { 
      type: Number
    },
    photo: {
      thumb:{
        type: String,
      },
      highres: {
        type: String,
      }
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
      type: Number,
      required: true,
    },
    cook_time_hr:{
      type: Number,
      required: true,
      default: 0
    },
    cook_time_min:{
      type: Number,
      required: true,
      default: 0
    },
    prep_time_hr:{
      type: Number,
      default: 0
    },
    prep_time_min:{
      type: Number,
      default: 0
    },
    total_servings:{
      type: Number,
      required: true,
    },
    nutritionDetails: {
      serving_weight_grams: {
        type: Number
      },
      nf_calories: {
        type: Number
      },
      nf_total_fat: {
        type: Number
      },
      nf_saturated_fat: {
        type: Number
      },
      nf_polyunsaturated_fat: {
        type: Number
      },
      nf_monounsaturated_fat: {
        type: Number
      },
      nf_cholesterol: {
        type: Number
      },
      nf_sodium: {
        type: Number
      },
      nf_total_carbohydrate: {
        type: Number
      },
      nf_dietary_fiber: {
        type: Number
      },
      nf_sugars: {
        type: Number
      },
      nf_protein: {
        type: Number
      },
      nf_vitamin_d: {
        type: Number
      },
      nf_calcium: {
        type: Number
      },
      nf_iron: {
        type: Number
      },
      nf_potassium: {
        type: Number
      },
    }
});

schema.index({ ingredients: 1 });

schema.pre("save", function (next) {
    var doc = this;
   
    Counter.findOneAndUpdate(
      { label: "recipeNumber" }, 
      { "$inc": { seq: 1 } },
      function(error, counter)   {
        if(error) return next(error);
        doc.recipeNumber = counter.seq;
        next();
    });
});

module.exports = mongoose.model("Recipe", schema);