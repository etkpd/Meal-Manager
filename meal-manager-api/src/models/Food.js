const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    food_name: { 
      type: String,
      required: true 
    },
    serving_qty: {
      type: Number
    },
    serving_unit: {
      type: String
    },
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
    nf_trans_fat: {
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
    nf_total_carbohydrates: {
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
    food_group: {
      type: String
    },
    photo: {
      thumb:{
        type: String,
      },
      highres: {
        type: String,
      }
    }
});

schema.index({ food_name: "text" })

module.exports = mongoose.model("Food", schema);