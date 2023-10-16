
// use to require unique_keys in .env file 
require ('dotenv').config();
const mongoose = require('mongoose');

const dbconn = async()=>{
    try{
     // MONGO_URI is defined in .env file    
     await mongoose.connect( process.env.MONGO_URI , {useNewUrlParser : true});
    console.log("DataBase Connected...... ");
    }
    catch(error){
        console.error("Error Occurred  in connecting Database " , error.message);
    }
}


module.exports = dbconn ;