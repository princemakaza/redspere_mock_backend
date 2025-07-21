const express = require('express');
const router = express.Router();
const flightService = require('../services/flight_service');

// Create a new flight
router.post('/', async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    res.status(201).json(flight);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all flights
router.get('/', async (req, res) => {
  try {
    const flights = await flightService.getAllFlights();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get flight by flight number
router.get('/:flightNumber', async (req, res) => {
  try {
    const flight = await flightService.getFlightByNumber(req.params.flightNumber);
    if (!flight) return res.status(404).json({ error: 'Flight not found' });
    res.json(flight);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update flight
router.put('/:flightNumber', async (req, res) => {
  try {
    const updated = await flightService.updateFlight(req.params.flightNumber, req.body);
    if (!updated) return res.status(404).json({ error: 'Flight not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete flight
router.delete('/:flightNumber', async (req, res) => {
  try {
    const deleted = await flightService.deleteFlight(req.params.flightNumber);
    if (!deleted) return res.status(404).json({ error: 'Flight not found' });
    res.json({ message: 'Flight deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
