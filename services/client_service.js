const Client = require("../models/client_models"); // Adjust the path as per your project structure

// Service to create a new client
// Service to create a new client
const createClient = async (clientData) => {
  try {
    // Check if email already exists
    const existingEmailClient = await Client.findOne({ "contactAndAddressDetails.email": clientData.contactAndAddressDetails.email });
    if (existingEmailClient) {
      throw new Error("Email already exists");
    }

    // Check if nationalId already exists
    const existingNationalIdClient = await Client.findOne({ "basicInfo.nationalId": clientData.basicInfo.nationalId });
    if (existingNationalIdClient) {
      throw new Error("National ID already exists");
    }

    // Create and save a new client
    const newClient = new Client(clientData);
    await newClient.save();
    return newClient;
  } catch (error) {
    throw new Error(error.message);
  }
};



// Service to get all clients
const getAllClients = async () => {
  try {
    const clients = await Client.find();
    return clients;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to fetch a client by ID
const getClientById = async (id) => {
  try {
    const client = await Client.findById(id);
    if (!client) {
      throw new Error("Client not found");
    }
    return client;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to fetch clients by a specific field
const getClientsByField = async (field, value) => {
  try {
    const query = {};
    query[field] = value;
    const clients = await Client.find(query);
    return clients;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to update a client
const updateClient = async (id, updateData) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedClient) {
      throw new Error("Client not found");
    }
    return updatedClient;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Service to delete a client
const deleteClient = async (id) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(id);
    if (!deletedClient) {
      throw new Error("Client not found");
    }
    return deletedClient;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getClientByEmail = async (email) => {
  try {
    const client = await Client.findOne({ "contactAndAddressDetails.email": email });
    if (!client) {
      throw new Error("Client not found");
    }
    return client;
  } catch (error) {
    throw new Error(error.message);
  }
};


module.exports = {
  createClient,
  getAllClients,
  getClientById,
  getClientsByField,
  updateClient,
  deleteClient,
  getClientByEmail
};
