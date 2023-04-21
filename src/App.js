import { useEffect, useState } from "react";
import DragAndDrop from "./DragAndDrop";

function App() {
  const [files, setFiles]=useState([]);
  useEffect(() => {
    console.log(files)
  }, [files])
  const clearFiles=(name)=>{
    setFiles(f=>f.filter(f=>f.name!==name))
  }
  const uploadFiles=()=>{
    setFiles([])
    alert('Boo! you are hacked by eessadrati')
  }
  return (
    <div className="container">
      <h1>React Drag & Drop</h1>
      <DragAndDrop setFiles={setFiles}/>
      <div style={{height:'20vh', overflow:'auto',}}>
        {files.map((file,index)=>(
          <div key={index} style={{display:'flex', justifyContent:'center', alignItems:'center',width:'100%'}}>
          <div  style={{margin:'5px 25px',marginRight:'25px', width:'100%'}}>
            {file.name}
          </div>
          <i class="fa-solid fa-xmark" style={{fontSize:'1.5em',margin:'8px', cursor:'pointer'}} onClick={()=>clearFiles(file.name)}></i>
          </div>
        ))}
      </div>
      {files.length>0 && <button onClick={uploadFiles} style={{padding:'5px 10px', margin:'26px', fontSize:'1.3em', backgroundColor:'#539165',
                                                              color:'#FCFCFC',cursor:'pointer', border:'none', borderRadius:'5px'}}>
           Upload
      </button>}

    </div>
  );
}

export default App;
