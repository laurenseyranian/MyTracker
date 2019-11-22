const mongoose = require('mongoose');
const { Schema } = mongoose;

const FoodLogSchema = new Schema({
  breakfast: {
    type: String,
    minlength: [3, "Food entry must have more than 3 characters"],
    maxlength: 255
  },
  am_snack: {
    type: String,
    minlength: [3, "Food entry must have more than 3 characters"],
    maxlength: 255
  },
  lunch: {
    type: String,
    minlength: [3, "Food entry must have more than 3 characters"],
    maxlength: 255
  },
  pm_snack: {
    type: String,
    minlength: [3, "Food entry must have more than 3 characters"],
    maxlength: 255
  },
  dinner: {
    type: String,
    minlength: [3, "Food entry must have more than 3 characters"],
    maxlength: 255
  },
  bedtime_snack: {
    type: String,
    minlength: [3, "Food entry must have more than 3 characters"],
    maxlength: 255
  },

}, {timestamps: true});

module.exports = mongoose.model('FoodLog', FoodLogSchema);
