import './App.css';

function App() {

  const logoUrl = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

  return ( 

    // In container one half for logImg and other for file
    <div className='container'>
    <img src={logoUrl} className='img' alt="Img Not Found" />
    <div className='wrapper'>
      <h1>Simple file sharing!</h1>
      <p>Upload and share the download link.</p>
      
      <button >Upload</button>
      <input
        type="file"
        style={{ display: "none" }}
      />

    </div>
  </div>
  );
}

export default App;
 