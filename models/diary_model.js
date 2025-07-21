const mongoose = require('mongoose');

const dairyServiceSchema = new mongoose.Schema({
  serviceType: { type: String, required: true }, // e.g., milking, breeding, vet check
  livestockId: { type: mongoose.Schema.Types.ObjectId, ref: 'Livestock', required: true },
  performedBy: { type: String, required: true },
  datePerformed: { type: Date, default: Date.now },
  notes: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('DairyService', dairyServiceSchema);
