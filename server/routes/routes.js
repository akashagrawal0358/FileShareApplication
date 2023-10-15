const express = require('express') ;
const  uploadData  = require('../controller/file_controller.js');

const router = express.Router();

// traffic comes here then 'uploadData' function called 
// file_controller have uploadData 
router.post('/upload' , uploadData)



module.exports = router;