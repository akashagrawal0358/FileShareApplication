import './App.css';
import { useRef, useState, useEffect } from 'react';
import uploadFile from './services/api';

function App() {

  const logoUrl = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';
  const fileInput = useRef();


  const onUploadClick = () => {
    fileInput.current.click();
  }


  const [file, setFile] = useState("");
  console.log(file);


//  Helps in appending the link of uploaded file
 const[link , setLink] = useState('');


  useEffect(() => {
    const getData = async () => {

      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
      
      //  'uploadFile func'  calls and post data 
      let response = await uploadFile(data) ; 
        setLink(response.path);
      }
    }
    getData() ;


    // runs every time when file changes
  }, [file])


  return (

    // In container one half for logImg and other for file
    <div className='container'>
      <img src={logoUrl} className='img' alt="Img Not Found" />
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>

        <button onClick={() => onUploadClick()} >Upload</button>
        {/* When we click on upload button then it refers input element */}
        <input
          type="file"
          ref={fileInput}
          // display:none -->  to not show input element
          style={{ display: "none" }}
          // e.target.value not works here 
          // Use e.target.files where files is an array
          onChange={(e) => setFile(e.target.files[0])}
        />


        {/* It shows the link of uploaded file just below upload button */}
        <a href={link} target='_blank'> {link} </a>
      </div>
    </div>
  );
}

export default App;
