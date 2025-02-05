const mongoose = require("mongoose");

const loanRestructuringSchema = new mongoose.Schema(
  {
    appliedLoanId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "appliedLoan",
      required: true,
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    clientEmail: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    newLoanAmount: {
      type: String,
      required: true,
    },
    newRepaymentTerm: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
      required: true,
    },
    requestDate: {
      type: Date,
      default: Date.now,
    },
    approvedDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LoanRestructuring", loanRestructuringSchema);
