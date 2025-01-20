const express = require('express');
const router = express.Router();
const appliedLoanService = require('../services/apply_loan_service'); 
// Route to create a new applied loan
router.post('/create', async (req, res) => {
  try {
    const loanData = req.body;
    const newLoan = await appliedLoanService.createAppliedLoan(loanData);
    res.status(201).json({
      message: 'Applied loan created successfully',
      data: newLoan,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error creating applied loan',
      error: error.message,
    });
  }
});

// Route to get all applied loans
router.get('/getall', async (req, res) => {
  try {
    const loans = await appliedLoanService.getAllAppliedLoans();
    res.status(200).json({
      message: 'Applied loans retrieved successfully',
      data: loans,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving applied loans',
      error: error.message,
    });
  }
});

// Route to fetch an applied loan by ID
router.get('/get/:id', async (req, res) => {
  try {
    const loanId = req.params.id;
    const loan = await appliedLoanService.getAppliedLoanById(loanId);
    if (!loan) {
      return res.status(404).json({ message: 'Applied loan not found' });
    }
    res.status(200).json({
      message: 'Applied loan retrieved successfully',
      data: loan,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving applied loan',
      error: error.message,
    });
  }
});

// Route to fetch applied loans by client ID
router.get('/client/:clientId', async (req, res) => {
  try {
    const clientId = req.params.clientId;
    const loans = await appliedLoanService.getAppliedLoansByClientId(clientId);
    res.status(200).json({
      message: 'Applied loans for client retrieved successfully',
      data: loans,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving applied loans for client',
      error: error.message,
    });
  }
});

// Route to fetch applied loans by client email
router.get('/email/:clientEmail', async (req, res) => {
  try {
    const clientEmail = req.params.clientEmail;
    const loans = await appliedLoanService.getAppliedLoansByClientEmail(clientEmail);
    res.status(200).json({
      message: 'Applied loans for client email retrieved successfully',
      data: loans,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving applied loans for client email',
      error: error.message,
    });
  }
});

// Route to update an applied loan
router.put('/update/:id', async (req, res) => {
  try {
    const loanId = req.params.id;
    const updateData = req.body;
    const updatedLoan = await appliedLoanService.updateAppliedLoan(loanId, updateData);
    if (!updatedLoan) {
      return res.status(404).json({ message: 'Applied loan not found' });
    }
    res.status(200).json({
      message: 'Applied loan updated successfully',
      data: updatedLoan,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating applied loan',
      error: error.message,
    });
  }
});

// Route to delete an applied loan
router.delete('/delete/:id', async (req, res) => {
  try {
    const loanId = req.params.id;
    const deletedLoan = await appliedLoanService.deleteAppliedLoan(loanId);
    if (!deletedLoan) {
      return res.status(404).json({ message: 'Applied loan not found' });
    }
    res.status(200).json({
      message: 'Applied loan deleted successfully',
      data: deletedLoan,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting applied loan',
      error: error.message,
    });
  }
});

// Route to filter applied loans by status
router.get('/status/:status', async (req, res) => {
  try {
    const status = req.params.status;
    const loans = await appliedLoanService.getAppliedLoansByStatus(status);
    res.status(200).json({
      message: 'Applied loans with specified status retrieved successfully',
      data: loans,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving applied loans by status',
      error: error.message,
    });
  }
});

// Route to paginate applied loans
router.get('/paginate', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const loans = await appliedLoanService.getAllAppliedLoansWithPagination(
      parseInt(page),
      parseInt(limit)
    );
    res.status(200).json({
      message: 'Applied loans retrieved with pagination successfully',
      data: loans,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving applied loans with pagination',
      error: error.message,
    });
  }
});

module.exports = router;
