const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const userRoutes = require('./routes/user.routes')



//  importation et  Connection a la base de données
const db = require('./db/postgres.db');
db.connectDB();

const app = express();

// logger les req et les res
app.use(morgan("dev"));

//middlewares

app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({extended:false}));



// route users
app.use("/api", userRoutes);





//exportation de l'app
module.exports = app;