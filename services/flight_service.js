const Flight = require('../models/flight_model');

// Create a new flight
exports.createFlight = async (data) => {
  const flight = new Flight(data);
  return await flight.save();
};

// Get all flights
exports.getAllFlights = async () => {
  return await Flight.find().sort({ createdAt: -1 });
};

// Get a single flight by flight number
exports.getFlightByNumber = async (flightNumber) => {
  return await Flight.findOne({ flightNumber });
};

// Update flight
exports.updateFlight = async (flightNumber, updateData) => {
  return await Flight.findOneAndUpdate({ flightNumber }, { $set: updateData }, { new: true });
};

// Delete flight
exports.deleteFlight = async (flightNumber) => {
  return await Flight.findOneAndDelete({ flightNumber });
};
