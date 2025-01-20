const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema(
  {
    minimumAmount: {
      type: Number,
      required: true,
    },
    maximumAmount: {
      type: Number,
      required: true,
    },
    minimumRate: {
      type: Number,
      required: true,
    },
    maximumRate: {
      type: Number,
      required: true,
    },
    defaultRate: {
      type: Number,
      required: true,
    },
    loanType: {
      type: String,
      required: true,
    },
    defaultInterval: {
      type: String,
      enum: ["Monthly", "Weekly", "Daily"], // Adjust as needed
      required: true,
      default: "Monthly",
    },
    interestCalculationMethod: {
      type: String,
      required: true,
    },
    maxDuration: {
      type: Number,
      required: true,
    },
    maxAmount: {
      type: Number,
      required: true,
    },
    interest: {
      type: Number,
      required: true,
    },
    summary: {
      loanAmount: {
        type: Number,
        required: true,
      },
      loanApplicationFee: {
        type: Number,
        required: true,
      },
      loanInsuranceFee: {
        type: Number,
        required: true,
      },
      fundsTransferFees: {
        type: Number,
        required: true,
      },
      arrangementFees: {
        type: Number,
        required: true,
      },
    },
    loanTenure: {
      type: Number,
      required: true,
    },
    disbursementOption: {
      type: String,
      enum: ["Mobile", "BANK"], // Add more options if applicable
      required: true,
    },
    typeOfLoan: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically manages createdAt and updatedAt fields
);

module.exports = mongoose.model("Loan", loanSchema);
