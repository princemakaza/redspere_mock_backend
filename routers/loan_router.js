const express = require("express");
const {
  createLoan,
  getAllLoans,
  getLoanById,
  getLoansByField,
  updateLoan,
  deleteLoan,
} = require("../services/loan_service"); // Adjust the path as per your project structure

const router = express.Router();

// Route to create a new loan
router.post("/", async (req, res) => {
  try {
    const loanData = req.body;
    const newLoan = await createLoan(loanData);
    res.status(201).json({
      success: true,
      message: "Loan created successfully",
      data: newLoan,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// Route to get all loans
router.get("/", async (req, res) => {
  try {
    const loans = await getAllLoans();
    res.status(200).json({
      success: true,
      data: loans,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Route to get a loan by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const loan = await getLoanById(id);
    res.status(200).json({
      success: true,
      data: loan,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
});

// Route to get loans by a specific field
router.get("/search", async (req, res) => {
  try {
    const { field, value } = req.query;
    const loans = await getLoansByField(field, value);
    res.status(200).json({
      success: true,
      data: loans,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// Route to update a loan
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedLoan = await updateLoan(id, updateData);
    res.status(200).json({
      success: true,
      message: "Loan updated successfully",
      data: updatedLoan,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
});

// Route to delete a loan
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLoan = await deleteLoan(id);
    res.status(200).json({
      success: true,
      message: "Loan deleted successfully",
      data: deletedLoan,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
