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

});

module.exports = mongoose.model("Recipe", schema);