import {useEffect, useRef, useState} from 'react'
import { uploadFile } from './services/api.js';

function App() {

  const [file,setFile]=useState('');
  const [result, setResult] = useState('');
  const fileInputRef=useRef();

  useEffect(()=>{
    const getImage = async() => {
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);
        //console.log(data);
        const res = await uploadFile(data);
        setResult(res.path);
      }
    }
    getImage();
  },[file])

  const onUploadClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>
        
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result} target='_blank' className='anchor'>{result}</a>
      </div>
    </div>
  );
}

export default App;
