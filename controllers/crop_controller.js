const cropService = require('../services/crop_service');

exports.createCrop = async (req, res) => {
  try {
    const crop = await cropService.createCrop(req.body);
    res.status(201).json(crop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllCrops = async (req, res) => {
  try {
    const crops = await cropService.getAllCrops();
    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCropById = async (req, res) => {
  try {
    const crop = await cropService.getCropById(req.params.id);
    if (!crop) return res.status(404).json({ message: "Crop not found" });
    res.status(200).json(crop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.sellCrop = async (req, res) => {
  try {
    const { quantity } = req.body;
    const updatedCrop = await cropService.sellCrop(req.params.id, quantity);
    res.status(200).json({ message: 'Crop sold successfully', crop: updatedCrop });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
