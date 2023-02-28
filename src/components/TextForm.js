import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=()=>{
        let upText=text.toUpperCase();
        setText(upText);
    }

    const handleLowClick=()=>{
        let upText=text.toLowerCase();
        setText(upText);
    }

    const handleClearClick = () =>{
        let clrText = "";
        setText(clrText);
    }

    const handleCopyClick=()=>{
        var selText = document.getElementById('myBox')
       
        selText.select();
        navigator.clipboard.writeText(selText.value);
    }

    const handleExtraClick=()=>{
        let newText = text.split(/[ ]+/);
        console.log(newText);
        setText(newText.join(" "))
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const[text,setText]= useState("");

   
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'#131a24':'white'}}>
        <h1 style={{color: props.mode==='dark'?'white':'#131a24'}}>{props.heading}</h1>
        
        <div className="mb-3">
            
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"
                style={{backgroundColor: props.mode==='dark'?'#131a24':'white' , color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraClick}>Remove Extra Spaces</button>

    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3 className='my-3 mx-1'>Preview</h3>
        <p>{text}</p>

        <h3 className='my-3 mx-1'>Text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
    </div>
    </>
  )
}
