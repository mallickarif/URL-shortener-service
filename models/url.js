const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  original_url: {
   type: String,
  required: true,
  },
  short_code: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Url", urlSchema);
