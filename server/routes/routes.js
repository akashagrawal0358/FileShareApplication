const express = require('express') ;
//const  uploadData  = require('../controller/file_controller.js');
const upload = require('../utils/upload.js');
//const downloadData = require('../controller/file_controller.js')

const { downloadData, uploadData }  = require('../controller/file_controller.js')

const router = express.Router();


// traffic comes here, then 'uploadData' function called 
// file_controller have uploadData 
// upload is a middleware, defined in utils -> upload.js
router.post('/upload' , upload.single('file') ,  uploadData) ;

// To get image after upload
router.get('/file/:fileId' , downloadData) ;


module.exports = router;