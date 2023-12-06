import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Contverted into Upper Case", "success")

    }

    const handletoClick = ()=>{
        console.log("UpperCase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Contverted into Lower Case", "success")
    }

    const handleOnChange = (event)=>{
        console.log("UpperCase Clicked");
        setText(event.target.value)
      
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "success")
      }

    const handleClearText = () => {
        let newText = ''
        setText(newText)
    }

    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+ /);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Space", "success")
    }
      

    const[text, setText] = useState("")
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743' }}>  
    <h1 className='mb-4'>{props.heading}</h1>
    <div className="mb-3">
    
   
    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handletoClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearText}>Clear Text</button>
    <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleRemoveSpace}>Remove Space</button>


    </div>
    <div className="container mx-1" style={{color: props.mode==='dark'?'white':'#042743' }}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=> element.length!==0).length} words  {text.length} character</p>
        <p>{0.008 * text.split(" ").filter((element)=> element.length!==0).length} mintues read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Your Text Please'}</p>

    </div>
    </>
  )
}
