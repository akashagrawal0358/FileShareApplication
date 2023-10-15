import axios from 'axios';

const API_URL = "http://localhost:8000" ;

const uploadFile = async (data) => {
    try {
        //  axios return response object
        //  response contains data key 
        let response = await axios.post(`${API_URL}/upload`, data);
        return response.data ;
    } catch (error) {
        console.error("Error Occurred ", error.message);
    }
};


export default uploadFile;