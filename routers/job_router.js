const express = require("express");
const router = express.Router();
const jobService = require("../services/job_services");

// Create a new job
router.post("/", async (req, res) => {
  try {
    const job = await jobService.createJob(req.body);
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Create multiple jobs
router.post("/bulk", async (req, res) => {
  try {
    const jobs = await jobService.createManyJobs(req.body);
    res.status(201).json(jobs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await jobService.getAllJobs();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single job by ID
router.get("/:id", async (req, res) => {
  try {
    const job = await jobService.getJobById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a job
router.put("/:id", async (req, res) => {
  try {
    const job = await jobService.updateJob(req.params.id, req.body);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a job
router.delete("/:id", async (req, res) => {
  try {
    const job = await jobService.deleteJob(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get recent jobs
router.get("/recent/:limit?", async (req, res) => {
  try {
    const limit = req.params.limit || 10; // Default to 10 if not specified
    const jobs = await jobService.getRecentJobs(limit);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/category/:category", async (req, res) => {
  try {
    const { limit, sort, type, skills } = req.query;
    const jobs = await jobService.getJobsByCategory(req.params.category, {
      limit,
      sort,
      type,
      skills,
    });

    if (jobs.length === 0) {
      return res.status(404).json({
        message: "No jobs found matching these criteria",
      });
    }

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
