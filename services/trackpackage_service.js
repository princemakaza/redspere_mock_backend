const TrackPackage = require('../models/trackpackage_model'); // Replace with your actual model

// Create a new tracking package
async function createTrackPackage(data) {
  const newPackage = new TrackPackage(data);
  return await newPackage.save();
}

// Get all tracked packages
async function getAllTrackPackages() {
  return await TrackPackage.find();
}

// Get a package by tracking number
async function getPackageByTrackingNumber(trackingNumber) {
  return await TrackPackage.findOne({ trackingNumber });
}

// Update tracking status
async function updateTrackingStatus(trackingNumber, updateData) {
  return await TrackPackage.findOneAndUpdate(
    { trackingNumber },
    { $set: updateData },
    { new: true }
  );
}

// Delete a tracking entry
async function deleteTrackPackage(trackingNumber) {
  const deleted = await TrackPackage.findOneAndDelete({ trackingNumber });
  return deleted;
}

module.exports = {
  createTrackPackage,
  getAllTrackPackages,
  getPackageByTrackingNumber,
  updateTrackingStatus,
  deleteTrackPackage,
};
