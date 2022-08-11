import React from 'react'

function Alert(props) {
  const capitalise = (word)=>{   // this function will capitalize first word of alert.props.type
       const lower = word.toLowerCase();
       return lower.charAt(0).toUpperCase() + lower.slice(1);       
  }
  
  return (
    // Here, props.alert&& is used as a condition i.e as by default value passed of props.alert is null 
    //so here using this syntax(props.alert &&) will check if its value is null then it will not process rest of code in next lines,
    // and if it is not null that it will process the next codes in Alert.js
    
    <div style ={{height: '50px'}}>   {/* this will give a specific height fixed for alert message and will not hinder positions of other elements */} 
    
   
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg} 
        </div>}
        </div>
  )
}

export default Alert