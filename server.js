const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const clientRouter = require('./routers/client_router'); 
const loanRouter = require('./routers/loan_router');
const appliedLoan = require('./routers/apply_loan_router');
const url = "mongodb+srv://clinpride:Wuma7L6RuVhvf4Ki@cluster0.c0tmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
mongoose.connect(url)
    .then(() => {
        console.log('The MongoDB has connected successfully');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/v1/clients', clientRouter);
app.use('/api/v1/loan', loanRouter);
app.use('/api/v1/appliedloan', appliedLoan);
const Port = 4071;
app.listen(Port, () => {
    console.log("The server is running at port:", Port);
});