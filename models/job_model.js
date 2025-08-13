const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String, required: true },
  type: { 
    type: String, 
    required: true,
    enum: [
      'Full-time', 
      'Part-time', 
      'Contract', 
      'Freelance', 
      'Internship', 
      'Temporary',
      'Remote',
      'Hybrid'
    ],
    default: 'Full-time'
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Technology',
      'Marketing',
      'Finance',
      'Healthcare',
      'Education',
      'Engineering',
      'Design',
      'Sales',
      'Human Resources',
      'Customer Service',
      'Operations',
      'Other'
    ],
    default: 'Technology'
  },
  description: { type: String, required: true },
  skills: { type: [String], required: true },
  logoInitials: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);