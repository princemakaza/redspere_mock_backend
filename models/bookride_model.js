const mongoose = require('mongoose');

const RideBookingSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  driverName: {
    type: String,
    required: true,
  },
  carModel: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  price: {
    type: Number,
    required: true,
  },
  estimatedTime: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  rideType: {
    type: String,
    enum: ['Standard', 'Premium', 'Shared'],
    default: 'Standard',
  },
  availableSeats: {
    type: Number,
    required: true,
    min: 1,
  },
  imageUrl: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('RideBooking', RideBookingSchema);
