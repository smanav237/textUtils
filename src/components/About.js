import React, {useState} from 'react'


export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //       color: "black",
    //       backgroundColor: "white"
    // })
    
    let myStyle = {
      color: props.mode === 'dark'?'white':'#055052',
      backgroundColor: props.mode ==='dark'?'#055052':'white'
  }




    // const [btnText, setBtnText] = useState("Enable Dark Mode")
    
    // const toggleStyle = ()=>
    // {
    //     if(myStyle.color === "black")
    //     {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "1px solid white"
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
  
  
    return (
      <div className = "container" style ={{color: props.mode === 'dark'?'white':'# ',}}>  
      <h2>About</h2>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" style ={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style ={myStyle}>
          Textutils gives you a way to analyze your text quickly and effeciently. Be it word count,character count etc..  
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style ={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style ={myStyle}>
        Text utils is a free character counter tool that provides instant character cout & word count statistics for given text. Textutils report the number of words and characters. Thus it is suitable for writing text with word/character limit.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style ={myStyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style ={myStyle}>
        This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera etc. It suits to count characters in Facebook, blog, books, excel, pdf, essays etc..
        </div>
        </div>
    </div>
    </div>
    {/* <div className='container my-3'>
    <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
    </div> */}
    </div>
 
  )
}
