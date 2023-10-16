const express = require('express') ;
const  uploadData  = require('../controller/file_controller.js');
const upload = require('../utils/upload.js');

const router = express.Router();


// traffic comes here, then 'uploadData' function called 
// file_controller have uploadData 
// upload is a middleware, defined in utils -> upload.js
router.post('/upload' , upload.single('file') ,  uploadData)
 


module.exports = router;