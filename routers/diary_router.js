const express = require('express');
const router = express.Router();
const dairyServiceController = require('../controllers/diary_controller');

router.post('/', dairyServiceController.createDairyService);
router.get('/', dairyServiceController.getAllDairyServices);
router.get('/:id', dairyServiceController.getDairyServiceById);

module.exports = router;
