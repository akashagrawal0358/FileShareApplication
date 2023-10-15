const express = require('express');
const router  = require('./routes/routes.js' );
const cors = require('cors');

const app = express() ;
const PORT = process.env.PORT || 8000 ;


// Helps to resolves the CORS error
app.use(cors());

// when no route then traffic goes to 'router'
app.use('/' , router) ;



app.listen( PORT, ()=>{
    console.log(`Server is Running on : ${PORT} `);
})