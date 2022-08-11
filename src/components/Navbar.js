import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>   
   
    {/* we will write the code of this string with javascript like this.
    We are using backticks so we can use template literals [Syntax: ${}] inside a string. Template literals are used for various purposes but here we are using them to store variables in a string.
     In this case, we have used $ to use props.mode as a variable and the curly brackets to specify that this is a JavaScript Code
     Result: Now, we can change the text of Use state between dark and light as a result it will change the color of our Navbar between dark and light.*/}
  
    <div className="container-fluid"> 
    {/* <a className="navbar-brand" href="#">{props.title}</a> */}

       <Link className="navbar-brand" to="/">{props.title}</Link>     {/*using link,to in place of a,href according to LINK in react routing */}

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          {/* <a className="nav-link" aria-current="page" href="#">Home</a>  */}
            <Link className="nav-link " aria-current="page" to="/">Home</Link>  {/* using link,to in place of a,href according to LINK in react routing*/}
          </li>

           
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link> 
          </li>
          
        </ul>
        
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-danger" type="submit">Search</button>
          </form> */}


          {/* For dark/light switch */}
          <div className={`form-check form-switch text-${props.mode==='light'? 'Dark' : 'light'}`}>
          {/*Here,ternary operator is used which will change the color of text(enable DarkMode) to Dark if Mode color is light and vice-versa  */}

          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />  {/* A togglemode function is assigned to the button which will be invoked on clicking the button*/}
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
         </div>
      </div>
    </div>
  </nav>
  )
}


Navbar.propTypes ={                       // proptypes are used to valid the data given in Navbar by App.js
  title: PropTypes.string.isRequired,      // checking whether the sent title from App.js is a string or not
  aboutText: PropTypes.string.isRequired
} 
 
Navbar.defaultProps = {     // used when no resp. values are passed in app.js
  title: "set title here",
  aboutText: "AboutUS"
}
