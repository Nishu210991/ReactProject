import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handletoClick = ()=>{
        console.log("UpperCase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log("UpperCase Clicked");
        setText(event.target.value)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
      }

    const handleClearText = () => {
        let newText = ''
        setText(newText)
    }

    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+ /);
        setText(newText.join(" "))
    }
      

    const[text, setText] = useState("")
  return (
    <>
    <div className='container'>   
    <div className="mb-3">
    
    <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handletoClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleRemoveSpace}>Remove Space</button>


    </div>
    <div className="container mx-1">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words  {text.length} character</p>
        <p>{0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    </>
  )
}
