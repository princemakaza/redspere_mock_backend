const express = require("express");
const {
  createNews,
  getAllNews,
  getNewsById,
  getNewsByField,
  updateNews,
  deleteNews
} = require("../services/sport_news_services");

const router = express.Router();

// Create news
router.post("/", async (req, res) => {
  try {
    const newsData = req.body;
    const newNews = await createNews(newsData);
    res.status(201).json({
      success: true,
      message: "News created successfully",
      data: newNews
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// Get all news
router.get("/", async (req, res) => {
  try {
    const news = await getAllNews();
    res.status(200).json({
      success: true,
      data: news
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// ✅ Get news by category (e.g., /category/Football)
router.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const articles = await getNewsByField("category", category);
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get news by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const news = await getNewsById(id);
    res.status(200).json({
      success: true,
      data: news
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message
    });
  }
});

// Search news by field
router.get("/search", async (req, res) => {
  try {
    const { field, value } = req.query;
    if (!field || !value) {
      return res.status(400).json({
        success: false,
        message: "Both field and value parameters are required"
      });
    }
    
    const news = await getNewsByField(field, value);
    res.status(200).json({
      success: true,
      data: news
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// Update news
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedNews = await updateNews(id, updateData);
    res.status(200).json({
      success: true,
      message: "News updated successfully",
      data: updatedNews
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message
    });
  }
});

// Delete news
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNews = await deleteNews(id);
    res.status(200).json({
      success: true,
      message: "News deleted successfully",
      data: deletedNews
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;