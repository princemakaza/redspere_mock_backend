const express = require('express');
const router = express.Router();
const trackService = require('../services/trackpackage_service');

// Create a new tracking entry
router.post('/', async (req, res) => {
  try {
    const newTrack = await trackService.createTrackPackage(req.body);
    res.status(201).json(newTrack);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all tracked packages
router.get('/', async (req, res) => {
  try {
    const packages = await trackService.getAllTrackPackages();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a package by tracking number
router.get('/:trackingNumber', async (req, res) => {
  try {
    const packageData = await trackService.getPackageByTrackingNumber(req.params.trackingNumber);
    if (!packageData) return res.status(404).json({ error: 'Package not found' });
    res.json(packageData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update package tracking info
router.put('/:trackingNumber', async (req, res) => {
  try {
    const updated = await trackService.updateTrackingStatus(req.params.trackingNumber, req.body);
    if (!updated) return res.status(404).json({ error: 'Package not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a tracking entry
router.delete('/:trackingNumber', async (req, res) => {
  try {
    const deleted = await trackService.deleteTrackPackage(req.params.trackingNumber);
    if (!deleted) return res.status(404).json({ error: 'Package not found' });
    res.json({ message: 'Package deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
