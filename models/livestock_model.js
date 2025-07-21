const mongoose = require('mongoose');

const livestockSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number },
  healthStatus: { type: String, default: 'Healthy' },
}, { timestamps: true });

module.exports = mongoose.model('Livestock', livestockSchema);
