const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  flightNumber: {
    type: String,
    required: true,
    unique: true,
  },
  airline: {
    type: String,
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
  departureTime: {
    type: Date,
    required: true,
  },
  arrivalTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  aircraftType: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Departed', 'Delayed', 'Cancelled', 'Arrived'],
    default: 'Scheduled',
  },
  seatCapacity: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Flight', FlightSchema);
