const express = require("express");
const router = express.Router();
const {
  createClient,
  getAllClients,
  getClientById,
  getClientsByField,
  updateClient,
  deleteClient,
  getClientByEmail
} = require("../services/client_service"); // Adjust the path to your service file

// Route to create a new client
router.post("/", async (req, res) => {
  try {
    const clientData = req.body;
    const newClient = await createClient(clientData);
    res.status(201).json({
      message: "Client registered successfully",
      data: newClient,
    });
  } catch (error) {
    let statusCode = 400; // Bad request by default
    if (error.message === "Email already exists" || error.message === "National ID already exists") {
      statusCode = 409; // Conflict
    }

    res.status(statusCode).json({
      message: "Error registering client",
      error: error.message,
    });
  }
});




// Route to get all clients
router.get("/", async (req, res) => {
  try {
    const clients = await getAllClients();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a client by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const client = await getClientById(id);
    res.status(200).json(client);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Route to get clients by a specific field
router.get("/field/:field/:value", async (req, res) => {
  try {
    const { field, value } = req.params;
    const clients = await getClientsByField(field, value);
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a client
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedClient = await updateClient(id, updateData);
    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Route to delete a client
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClient = await deleteClient(id);
    res.status(200).json(deletedClient);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});


router.get('/client/email/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const client = await getClientByEmail(email);
    return res.status(200).json({
      success: true,
      message: 'Client retrieved successfully',
      data: client,
    });
  } catch (error) {
    if (error.message === "Client not found") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching the client",
      error: error.message,
    });
  }
});




module.exports = router;
