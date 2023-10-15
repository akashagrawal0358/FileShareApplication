import './App.css';
import { useRef } from 'react' ;

function App() {

  const logoUrl = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';
  
  const fileInput = useRef() ;
  
  const onUploadClick = ()=>{
     fileInput.current.click();
  }

  return ( 

    // In container one half for logImg and other for file
    <div className='container'>
    <img src={logoUrl} className='img' alt="Img Not Found" />
    <div className='wrapper'>
      <h1>Simple file sharing!</h1>
      <p>Upload and share the download link.</p>
      
      <button onClick={ ()=> onUploadClick()} >Upload</button>
      {/* When we click on upload button then it refers input element */}
      <input
        type="file"
        ref={fileInput}
        // display:none -->  to not show input element
        style={{ display: "none" }}
      />

    </div>
  </div>
  );
}

export default App;
 