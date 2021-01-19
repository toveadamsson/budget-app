const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  item: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  category: { type: String, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("expense", expenseSchema);
