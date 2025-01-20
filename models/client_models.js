const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    basicInfo: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        maidenName: {
            type: String,
            default: null,
        },
        nationalId: {
            type: String,
            required: true,
            unique: true,
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        countryOfBirth: {
            type: String,
            required: true,
        },
        numberOfDependents: {
            type: Number,
            default: 0,
        },
        title: {
            type: String,
            enum: ['Mr', 'Mrs', 'Miss', 'Dr', 'Prof', 'Other'],
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
            required: true,
        },
    },
    contactAndAddressDetails: {
        phoneNumber: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        homeTelephone: {
            type: String,
            default: null,
        },
        addressDetails: {
            type: String,
            required: true,
        },
        streetName: {
            type: String,
            required: true,
        },
        streetNumber: {
            type: String,
            required: true,
        },
        townOrCity: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        yearsAtCurrentResidence: {
            type: Number,
            default: 0,
        },
    },
    nextOfKinDetails: {
        title: {
            type: String,
            enum: ['Mr', 'Mrs', 'Miss', 'Dr', 'Prof', 'Other'],
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        maidenSurname: {
            type: String,
            default: null,
        },
        relationship: {
            type: String,
            required: true,
        },
        idNumber: {
            type: String,
            required: true,
        },
        employer: {
            type: String,
            default: null,
        },
        profession: {
            type: String,
            default: null,
        },
        contactNumber: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            default: null,
        },
        address: {
            type: String,
            required: true,
        },
    },
    employmentDetails: {
        ministry: {
            type: String,
            required: true,
        },
        employeeNumber: {
            type: String,
            required: true,
        },
        profession: {
            type: String,
            required: true,
        },
        dateJoined: {
            type: Date,
            required: true,
        },
        expiryEmploymentDate: {
            type: Date,
            default: null,
        },
        grossSalary: {
            type: Number,
            required: true,
        },
        employer: {
            type: String,
            required: true,
        },
        netSalaryAsPerPayslip: {
            type: Number,
            required: true,
        },
        nameOfEmployer: {
            type: String,
            required: true,
        },
        phoneNumberOfEmployer: {
            type: String,
            required: true,
        },
        employmentContactPersonPhoneNumber: {
            type: String,
            required: true,
        },
    },
    documents: {
        nationalIdCard: {
            type: String,
            required: true,
        },
        payslipCard: {
            type: String,
            required: true,
        },
        proofOfResidence: {
            type: String,
            required: true,
        },
        proofOfEmployer: {
            type: String,
            required: true,
        },
    }
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Client', ClientSchema);
