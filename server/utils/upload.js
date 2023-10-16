
// Multer is a middleware for handling file uploads in Node.js web applications. 
const multer = require('multer');

const upload = multer({dest:'uploads'});


module.exports = upload ;