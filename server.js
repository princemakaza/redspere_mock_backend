const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const clientRouter = require('./routers/client_router'); 
const loanRouter = require('./routers/loan_router');
const appliedLoan = require('./routers/apply_loan_router');
const loanRestructuringRouter = require('./routers/loan_restructuring_router');
const sportsNewsRouter = require('./routers/sport_news_router');

const bookrideRouter = require('./routers/bookride_router');
const pachagetrackRouter = require('./routers/track_package_router');
const flightRouter = require('./routers/flight_router');
const livestockRouter = require('./routers/livestock_router');
const cropRouter = require('./routers/crop_router');
const diaryRouter = require('./routers/diary_router');





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




//transport
app.use('/api/v1/bookride', bookrideRouter);
app.use('/api/v1/trackpackage', pachagetrackRouter);
app.use('/api/v1/flight', flightRouter);


//famrers mall
app.use('/api/v1/livestock', livestockRouter);
app.use('/api/v1/crop', cropRouter);
app.use('/api/v1/diary', diaryRouter);






app.use('/api/v1/loan_restructuring_router', loanRestructuringRouter);
app.use('/api/v1/sports_news_update', sportsNewsRouter);
//changes
const Port = 4071;
app.listen(Port, () => {
    console.log("The server is running at port:", Port);
});