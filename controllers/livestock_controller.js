const livestockService = require('../services/livestock_service');

exports.createLivestock = async (req, res) => {
  try {
    const livestock = await livestockService.createLivestock(req.body);
    res.status(201).json(livestock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllLivestock = async (req, res) => {
  try {
    const livestock = await livestockService.getAllLivestock();
    res.status(200).json(livestock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLivestockById = async (req, res) => {
  try {
    const livestock = await livestockService.getLivestockById(req.params.id);
    if (!livestock) return res.status(404).json({ message: "Not found" });
    res.status(200).json(livestock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
