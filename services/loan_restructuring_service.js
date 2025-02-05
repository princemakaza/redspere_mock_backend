const LoanRestructuring = require("../models/loan_restructuring_model"); // Adjust the path as per your project structure

// Service to create a new loan restructuring request
const createLoanRestructuring = async (restructuringData) => {
  try {
    const newRestructuring = new LoanRestructuring(restructuringData);
    await newRestructuring.save();
    return newRestructuring;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to get all loan restructuring requests
const getAllLoanRestructurings = async () => {
  try {
    const restructurings = await LoanRestructuring.find()
      .populate("appliedLoanId")
    return restructurings;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to fetch a loan restructuring request by ID
const getLoanRestructuringById = async (id) => {
  try {
    const restructuring = await LoanRestructuring.findById(id)
      .populate("appliedLoanId")
    if (!restructuring) {
      throw new Error("Loan restructuring request not found");
    }
    return restructuring;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to fetch loan restructuring requests by client ID
const getLoanRestructuringsByClientId = async (clientId) => {
  try {
    const restructurings = await LoanRestructuring.find({ clientId })
      .populate("appliedLoanId")
    return restructurings;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getLoanRestructuringsByAppliedLoanId = async (appliedLoanId) => {
    try {
      const restructurings = await LoanRestructuring.find({ appliedLoanId })
        .populate("appliedLoanId")
      return restructurings;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  

// Service to update a loan restructuring request
const updateLoanRestructuring = async (id, updateData) => {
  try {
    const updatedRestructuring = await LoanRestructuring.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    )
      .populate("appliedLoanId")
    if (!updatedRestructuring) {
      throw new Error("Loan restructuring request not found");
    }
    return updatedRestructuring;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to delete a loan restructuring request
const deleteLoanRestructuring = async (id) => {
  try {
    const deletedRestructuring = await LoanRestructuring.findByIdAndDelete(id);
    if (!deletedRestructuring) {
      throw new Error("Loan restructuring request not found");
    }
    return deletedRestructuring;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getLoanRestructuringsByClientEmail = async (clientEmail) => {
  try {
    const restructurings = await LoanRestructuring.find({ clientEmail })
      .populate("appliedLoanId")

    if (!restructurings || restructurings.length === 0) {
      throw new Error("No loan restructuring requests found for this email");
    }

    return restructurings;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createLoanRestructuring,
  getAllLoanRestructurings,
  getLoanRestructuringById,
  getLoanRestructuringsByClientId,
  updateLoanRestructuring,
  deleteLoanRestructuring,
  getLoanRestructuringsByClientEmail,
  getLoanRestructuringsByAppliedLoanId
};
