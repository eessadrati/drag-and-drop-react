import React, { useRef, useState } from 'react';
import "./style.css"

const DragAndDrop = () => {
    const inputRef=useRef(null);
    const [dragActive, setDragActive] = useState(false)
    const handleDrag=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
          setDragActive(true);
        } else if (e.type === "dragleave") {
          setDragActive(false);
        }
    }
     // triggers when file is dropped
  const handleDrop = (e)=> {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      console.log(e.dataTransfer.files);
    }
  };
    const handleChange=(e)=>{
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
          console.log(e.target.files);
        }
    }
    const onButtonClick=()=>{
        inputRef.current.click();
    }
    return (
        <div className='dnd-container'>
        <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
                <div>
                    <p>Drag and drop your file here or</p>
                    <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
                </div> 
            </label>
            { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
        </form>
        </div>
    );
};

export default DragAndDrop;