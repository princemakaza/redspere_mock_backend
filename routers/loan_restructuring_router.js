const express = require("express");
const router = express.Router();
const {
  createLoanRestructuring,
  getAllLoanRestructurings,
  getLoanRestructuringById,
  getLoanRestructuringsByClientId,
  updateLoanRestructuring,
  deleteLoanRestructuring,
  getLoanRestructuringsByClientEmail,
  getLoanRestructuringsByAppliedLoanId
} = require("../services/loan_restructuring_service");

// Create a new loan restructuring request
router.post("/", async (req, res) => {
  try {
    const newRestructuring = await createLoanRestructuring(req.body);
    res.status(201).json(newRestructuring);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all loan restructuring requests
router.get("/", async (req, res) => {
  try {
    const restructurings = await getAllLoanRestructurings();
    res.status(200).json(restructurings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a loan restructuring request by ID
router.get("/:id", async (req, res) => {
  try {
    const restructuring = await getLoanRestructuringById(req.params.id);
    res.status(200).json(restructuring);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Get loan restructuring requests by client ID
router.get("/client/:clientId", async (req, res) => {
  try {
    const restructurings = await getLoanRestructuringsByClientId(req.params.clientId);
    res.status(200).json(restructurings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get loan restructuring requests by client email
router.get("/email/:clientEmail", async (req, res) => {
  try {
    const restructurings = await getLoanRestructuringsByClientEmail(req.params.clientEmail);
    res.status(200).json(restructurings);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});


// Get loan restructuring requests by client email
router.get("/email/:appliedLoanId", async (req, res) => {
    try {
      const restructurings = await getLoanRestructuringsByClientEmail(req.params.appliedLoanId);
      res.status(200).json(restructurings);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

// Update a loan restructuring request
router.put("/:id", async (req, res) => {
  try {
    const updatedRestructuring = await updateLoanRestructuring(req.params.id, req.body);
    res.status(200).json(updatedRestructuring);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete a loan restructuring request
router.delete("/:id", async (req, res) => {
  try {
    await deleteLoanRestructuring(req.params.id);
    res.status(200).json({ message: "Loan restructuring request deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
