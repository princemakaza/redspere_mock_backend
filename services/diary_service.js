const DairyService = require('../models/diary_model');

exports.createDairyService = async (data) => {
  const dairyService = new DairyService(data);
  return await dairyService.save();
};

exports.getAllDairyServices = async () => {
  return await DairyService.find().populate('livestockId');
};

exports.getDairyServiceById = async (id) => {
  return await DairyService.findById(id).populate('livestockId');
};
