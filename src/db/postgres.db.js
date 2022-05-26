const {Client} = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const client= new Client({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,

});


const connectDB = ()=>{
   
    client.connect()
          .then((result)=>{
           
            console.log("Connected to Database!");
           
          })
          .catch((err)=>{
            console.log(err);
          })
    
}
module.exports =  {client,connectDB};