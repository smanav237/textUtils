import React, {useState} from 'react'

export default function TextForm(props) {
  
    const handleUpClick = ()=>{
      let newText = text.toUpperCase();          // newText is used as we want to upper case both whether the new text or previously written bydefault text
      setText(newText);
      props.showAlert("Converted to upper case!", "success")
    }
    const handleLoClick = ()=>{ 
      let newText = text.toLowerCase(); 
      setText(newText);
      props.showAlert("Converted to lower case!", "success")
    }
    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();     // it will not select the copied text after clicking on button
      props.showAlert("Text copied!", "success")
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed!", "success")
    }
    const handleClearClick = ()=>{
      let newText = "";
      setText(newText);
      props.showAlert("Text Cleared!", "success")
    }
    const handleOnChange = (event)=>              //handleOnChange is used so that we can write/change text in the textbox
    {
      setText(event.target.value)                // memorize it
    }
    
    const [text,setText] = useState("");        //Enter text here is stored in text and setText is for updating the value in text
    // text= "new text";     //wrong way to update text
    // setText("new text")   //Right way to update text
    
    return (
      <> 

{/* in below line one bracket{} is for javascript syntax and inside bracket{} is for javascript object */}
<div className = "container" style={{color: props.mode==='dark'?'white':'black'}}>   {/* Change the color of the text to white when dark mode is enabled and vice-versa. */}
    <h1>{props.heading}</h1>
  
  <div className="mb-3" >
     <textarea className = "form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#417D7A':'white' ,          
     color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8">
     </textarea>                                       {/*handleOnChange is used so that we can write/change text in the textbox  */}
    {/* Change the color of text to white and background to #417D7A in textarea when dark mode is enabled and vice-versa. */}
    </div>

    {/* disable will inactive the buttons when length of text is empty */}
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upper case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lower case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear All</button>
    </div>
    
    <div style={{color: props.mode==='dark'?'white':'black'}}>   {/* Change the color of the text to white when dark mode is enabled and vice-versa. */}
      <h2>Your Summary</h2>
      <p>Characters Count : {text.length} </p>
      <p>Word Count : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
      <p>Time to read: {0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview yet"}</p>    {/* if the text length is 0 the the given message will be shown*/}
    </div>
    </>
  )
}
