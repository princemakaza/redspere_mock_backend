const dairyService = require('../services/diary_service');

exports.createDairyService = async (req, res) => {
  try {
    const result = await dairyService.createDairyService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDairyServices = async (req, res) => {
  try {
    const services = await dairyService.getAllDairyServices();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDairyServiceById = async (req, res) => {
  try {
    const service = await dairyService.getDairyServiceById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
