const Job = require("../models/job_model");

const createJob = async (jobData) => {
  try {
    const job = new Job(jobData);
    await job.save();
    return job;
  } catch (error) {
    throw error;
  }
};

const createManyJobs = async (jobsArray) => {
  try {
    const jobs = await Job.insertMany(jobsArray);
    return jobs;
  } catch (error) {
    throw error;
  }
};

const getAllJobs = async () => {
  try {
    const jobs = await Job.find();
    return jobs;
  } catch (error) {
    throw error;
  }
};

const getJobById = async (id) => {
  try {
    const job = await Job.findById(id);
    return job;
  } catch (error) {
    throw error;
  }
};

const updateJob = async (id, updateData) => {
  try {
    const job = await Job.findByIdAndUpdate(id, updateData, { new: true });
    return job;
  } catch (error) {
    throw error;
  }
};

const deleteJob = async (id) => {
  try {
    const job = await Job.findByIdAndDelete(id);
    return job;
  } catch (error) {
    throw error;
  }
};

const getRecentJobs = async (limit = 10) => {
  try {
    const jobs = await Job.find()
      .sort({ createdAt: -1 }) // Sort by newest first
      .limit(limit); // Limit results
    return jobs;
  } catch (error) {
    throw error;
  }
};

const getJobsByCategory = async (category, options = {}) => {
  try {
    const {
      limit = null,
      sort = "-createdAt", // Newest first by default
      type = null, // Filter by job type
      skills = null, // Filter by required skills
    } = options;

    let query = Job.find({ category });

    if (type) {
      query = query.where("type").equals(type);
    }

    if (skills) {
      query = query.where("skills").all([].concat(skills));
    }

    if (limit) {
      query = query.limit(parseInt(limit));
    }

    query = query.sort(sort);

    const jobs = await query.exec();
    return jobs;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createJob,
  createManyJobs,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
  getRecentJobs,
  getJobsByCategory,
};
