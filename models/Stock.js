const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    match: /^[A-Z]{1,5}$/,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.models.Stock || mongoose.model('Stock', stockSchema);