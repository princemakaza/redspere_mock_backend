const express = require('express');
const router = express.Router();
const cropController = require('../controllers/crop_controller');

router.post('/', cropController.createCrop);
router.get('/', cropController.getAllCrops);
router.get('/:id', cropController.getCropById);
router.post('/sell/:id', cropController.sellCrop);

module.exports = router;
