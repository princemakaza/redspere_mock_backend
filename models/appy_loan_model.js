const mongoose = require("mongoose");

const appliedLoanSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    clientEmail: {
      type: String,
      required: true,
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    loanId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Loan",
      required: true,
    },
    loan_amount: {
      type: String,
      required: true,
    },
    disbursement_option: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Applied", "Approved","Disbursement"],
      default: "Applied",
      required: true,
    },
    RefId: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

// Pre-save middleware to auto-generate RefId
appliedLoanSchema.pre("save", function (next) {
  if (!this.RefId) {
    const randomDigits = Math.floor(100000000 + Math.random() * 900000000); // Generate 9 random digits
    this.RefId = `R${randomDigits}`;
  }
  next();
});

module.exports = mongoose.model("appliedLoan", appliedLoanSchema);
