const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    group_title: {
      type: String,
      required: true
    },
    foods: { 
      type: [String],
      required: true 
    }
});

module.exports = mongoose.model("Food", schema);