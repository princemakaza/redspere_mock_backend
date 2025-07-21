const mongoose = require('mongoose');

const CargoShipmentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  cargoType: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'In Transit', 'Delivered', 'Delayed', 'Cancelled'],
    default: 'Pending',
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  estimatedDelivery: {
    type: Date,
    required: true,
  },
  trackingNumber: {
    type: String,
    required: true,
    unique: true,
  },
  serviceType: {
    type: String,
    enum: ['Standard', 'Express', 'Overnight'],
    default: 'Standard',
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('CargoShipment', CargoShipmentSchema);
