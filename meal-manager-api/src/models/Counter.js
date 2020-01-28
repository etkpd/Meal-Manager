const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    label: { 
      type: String
    },
    seq: { 
      type: Number, 
      default: 0 
    }
});

module.exports = mongoose.model("Counter", schema);