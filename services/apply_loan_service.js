const AppliedLoan = require("../models/appy_loan_model"); // Adjust the path as per your project structure

// Service to create a new applied loan
const createAppliedLoan = async (loanData) => {
  try {
    const newLoan = new AppliedLoan(loanData);
    await newLoan.save();
    return newLoan;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to get all applied loans
const getAllAppliedLoans = async () => {
  try {
    const loans = await AppliedLoan.find()
      .populate("clientId")
      .populate("loanId");
    return loans;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to fetch an applied loan by ID
const getAppliedLoanById = async (id) => {
  try {
    const loan = await AppliedLoan.findById(id)
      .populate("clientId")
      .populate("loanId");
    if (!loan) {
      throw new Error("Applied loan not found");
    }
    return loan;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to fetch applied loans by client ID
const getAppliedLoansByClientId = async (clientId) => {
  try {
    const loans = await AppliedLoan.find({ clientId })
      .populate("clientId")
      .populate("loanId");
    return loans;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to update an applied loan
const updateAppliedLoan = async (id, updateData) => {
  try {
    const updatedLoan = await AppliedLoan.findByIdAndUpdate(id, updateData, {
      new: true,
    })
      .populate("clientId")
      .populate("loanId");
    if (!updatedLoan) {
      throw new Error("Applied loan not found");
    }
    return updatedLoan;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to delete an applied loan
const deleteAppliedLoan = async (id) => {
  try {
    const deletedLoan = await AppliedLoan.findByIdAndDelete(id);
    if (!deletedLoan) {
      throw new Error("Applied loan not found");
    }
    return deletedLoan;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to filter applied loans by status
const getAppliedLoansByStatus = async (status) => {
  try {
    const loans = await AppliedLoan.find({ status })
      .populate("clientId")
      .populate("loanId");
    return loans;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to fetch applied loans by client email
const getAppliedLoansByClientEmail = async (clientEmail) => {
  try {
    const loans = await AppliedLoan.find({ clientEmail })
      .populate("clientId")
      .populate("loanId");
    return loans;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to paginate applied loans
const getAllAppliedLoansWithPagination = async (page = 1, limit = 10) => {
  try {
    const skip = (page - 1) * limit;
    const loans = await AppliedLoan.find()
      .populate("clientId")
      .populate("loanId")
      .skip(skip)
      .limit(limit);

    const totalLoans = await AppliedLoan.countDocuments();
    return {
      loans,
      totalLoans,
      currentPage: page,
      totalPages: Math.ceil(totalLoans / limit),
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createAppliedLoan,
  getAllAppliedLoans,
  getAppliedLoanById,
  getAppliedLoansByClientId,
  updateAppliedLoan,
  deleteAppliedLoan,
  getAppliedLoansByStatus,
  getAllAppliedLoansWithPagination,
  getAppliedLoansByClientEmail,
};
