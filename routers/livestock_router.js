const express = require('express');
const router = express.Router();
const livestockController = require('../controllers/livestock_controller');

router.post('/', livestockController.createLivestock);
router.get('/', livestockController.getAllLivestock);
router.get('/:id', livestockController.getLivestockById);

module.exports = router;
