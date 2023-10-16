
const File = require('../models/file.js')

const uploadData = async (request , response)=>{
  
   //  request contains all data 
  //   console.log(request);


 // fileObj stores what we need  
 const fileObj = {
    path : request.file.path,
    name : request.file.originalname
   }
   // console.log(fileObj) ;

   try{
    // validate fileObj and saves in DB
    const file = await File.create(fileObj);
    console.log(file);

    // file, name of collection
    response.status(200).json({path: `http://localhost:8000/file/${file._id}`})
   }
   catch(error){
    console.error("Error Occurred" , error.message )
    response.status(500).json({error: error.message })
   }
  
}



module.exports = uploadData ;