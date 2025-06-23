const SportsNews = require("../models/sports_news_model");

// Create news
const createNews = async (newsData) => {
  try {
    const news = new SportsNews(newsData);
    return await news.save();
  } catch (error) {
    throw new Error(`Failed to create news: ${error.message}`);
  }
};

// Get all news
const getAllNews = async () => {
  try {
    return await SportsNews.find().sort({ createdAt: -1 });
  } catch (error) {
    throw new Error(`Failed to fetch news: ${error.message}`);
  }
};

// Get news by ID
const getNewsById = async (id) => {
  try {
    const news = await SportsNews.findById(id);
    if (!news) throw new Error("News article not found");
    return news;
  } catch (error) {
    throw new Error(`Failed to fetch news: ${error.message}`);
  }
};

// Get news by field
const getNewsByField = async (field, value) => {
  try {
    const query = { [field]: value };
    return await SportsNews.find(query);
  } catch (error) {
    throw new Error(`Search failed: ${error.message}`);
  }
};

// Update news
const updateNews = async (id, updateData) => {
  try {
    const updated = await SportsNews.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    if (!updated) throw new Error("News article not found");
    return updated;
  } catch (error) {
    throw new Error(`Update failed: ${error.message}`);
  }
};

// Delete news
const deleteNews = async (id) => {
  try {
    const deleted = await SportsNews.findByIdAndDelete(id);
    if (!deleted) throw new Error("News article not found");
    return deleted;
  } catch (error) {
    throw new Error(`Deletion failed: ${error.message}`);
  }
};

module.exports = {
  createNews,
  getAllNews,
  getNewsById,
  getNewsByField,
  updateNews,
  deleteNews
};