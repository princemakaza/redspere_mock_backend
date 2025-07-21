const Livestock = require('../models/livestock_model');

exports.createLivestock = async (data) => {
  const newLivestock = new Livestock(data);
  return await newLivestock.save();
};

exports.getAllLivestock = async () => {
  return await Livestock.find();
};

exports.getLivestockById = async (id) => {
  return await Livestock.findById(id);
};
