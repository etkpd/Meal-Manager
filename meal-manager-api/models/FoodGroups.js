const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  group: {
    type: String,
    required: true
  },
  foods: [{title: String, id: Number}]
});

module.exports = mongoose.model("FoodGroups", schema);