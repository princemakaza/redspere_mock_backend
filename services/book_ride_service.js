const RideBooking = require('../models/bookride_model');

// Create a new ride
exports.createRide = async (data) => {
  const ride = new RideBooking(data);
  return await ride.save();
};

// Get all rides
exports.getAllRides = async () => {
  return await RideBooking.find().sort({ createdAt: -1 });
};

// Get a ride by ID
exports.getRideById = async (id) => {
  return await RideBooking.findOne({ id });
};

// Update a ride by ID
exports.updateRide = async (id, data) => {
  return await RideBooking.findOneAndUpdate({ id }, { $set: data }, { new: true });
};

// Delete a ride by ID
exports.deleteRide = async (id) => {
  return await RideBooking.findOneAndDelete({ id });
};
