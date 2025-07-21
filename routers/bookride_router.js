const express = require('express');
const router = express.Router();
const rideService = require('../services/book_ride_service');

// Create a new ride
router.post('/', async (req, res) => {
  try {
    const newRide = await rideService.createRide(req.body);
    res.status(201).json(newRide);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all rides
router.get('/', async (req, res) => {
  try {
    const rides = await rideService.getAllRides();
    res.json(rides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a ride by ID
router.get('/:id', async (req, res) => {
  try {
    const ride = await rideService.getRideById(req.params.id);
    if (!ride) return res.status(404).json({ error: 'Ride not found' });
    res.json(ride);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a ride
router.put('/:id', async (req, res) => {
  try {
    const updatedRide = await rideService.updateRide(req.params.id, req.body);
    if (!updatedRide) return res.status(404).json({ error: 'Ride not found' });
    res.json(updatedRide);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a ride
router.delete('/:id', async (req, res) => {
  try {
    const deletedRide = await rideService.deleteRide(req.params.id);
    if (!deletedRide) return res.status(404).json({ error: 'Ride not found' });
    res.json({ message: 'Ride deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
