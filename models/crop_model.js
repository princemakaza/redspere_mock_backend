const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  cropName: { type: String, required: true },
  category: { type: String, required: true }, // e.g., vegetable, grain, fruit
  quantityAvailable: { type: Number, required: true }, // in kg or units
  pricePerUnit: { type: Number, required: true },
  location: { type: String },
  lastHarvestDate: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Crop', cropSchema);
