const Crop = require('../models/crop_model');

exports.createCrop = async (data) => {
  const crop = new Crop(data);
  return await crop.save();
};

exports.getAllCrops = async () => {
  return await Crop.find();
};

exports.getCropById = async (id) => {
  return await Crop.findById(id);
};

exports.sellCrop = async (id, quantity) => {
  const crop = await Crop.findById(id);
  if (!crop) throw new Error("Crop not found");

  if (crop.quantityAvailable < quantity) {
    throw new Error("Not enough quantity to sell");
  }

  crop.quantityAvailable -= quantity;
  return await crop.save();
};
