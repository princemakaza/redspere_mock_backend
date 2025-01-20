const Loan = require("../models/loan_model"); // Adjust the path as per your project structure

// Service to create a new loan
const createLoan = async (loanData) => {
  try {
    // Create and save a new loan
    const newLoan = new Loan(loanData);
    await newLoan.save();
    return newLoan;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to get all loans
const getAllLoans = async () => {
  try {
    const loans = await Loan.find();
    return loans;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to fetch a loan by ID
const getLoanById = async (id) => {
  try {
    const loan = await Loan.findById(id);
    if (!loan) {
      throw new Error("Loan not found");
    }
    return loan;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to fetch loans by a specific field
const getLoansByField = async (field, value) => {
  try {
    const query = {};
    query[field] = value;
    const loans = await Loan.find(query);
    return loans;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to update a loan
const updateLoan = async (id, updateData) => {
  try {
    const updatedLoan = await Loan.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
    });
    if (!updatedLoan) {
      throw new Error("Loan not found");
    }
    return updatedLoan;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to delete a loan
const deleteLoan = async (id) => {
  try {
    const deletedLoan = await Loan.findByIdAndDelete(id);
    if (!deletedLoan) {
      throw new Error("Loan not found");
    }
    return deletedLoan;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createLoan,
  getAllLoans,
  getLoanById,
  getLoansByField,
  updateLoan,
  deleteLoan,
};
