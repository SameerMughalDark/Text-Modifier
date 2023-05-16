import React from 'react'
import { useState } from 'react';

export default function TextArea(props) {
  const [text, setText] = useState('Enter Your Text Here:');

  // creating function for returning UPPERCASE Words
  const toUpperCase = () => {

    let toUpperCaseWords = text.toUpperCase();
    setText(toUpperCaseWords);

  }

  // creating function for returning lowercase Words
  const toLowerCases = () => {

    let toLowerCaseWords = text.toLowerCase();
    setText(toLowerCaseWords);

  }
  // creating removeExtraSpaces function to remove extra spaces
  const removeExtraSpaces = () => {

    // let afterRemovingExtraSpaces=text.replace(/^\s+|\s+$/gm,'');
    let afterRemovingExtraSpaces=text.replace(/\s+/g,' ').trim();

    setText(afterRemovingExtraSpaces);

  }

  // creating handleChange function to able to write in textbox
  const handleChange = (event) => {

    let newValue = event.target.value;

    setText(newValue);

  }
  

  return (
    <div className='container my-3' >
      <h1  style={props.themeColor==='dark'?{color:'white'}:{color:'black'}}>{props.heading}</h1>
      <div className="form-floating">
        <textarea className="form-control" placeholder="Drop Your Selected Text Here:"  style={props.themeColor==='dark'?{backgroundColor:'#182028',color:'white',height: "100px"}:{color:'black',backgroundColor:'white',height: "100px"}} value={text} onChange={handleChange}>{setText}</textarea>
      </div>
      <button className="btn btn-primary mx-2 my-3" onClick={toUpperCase}>toUpperCase</button>
      <button className="btn btn-primary mx-2 my-3" onClick={toLowerCases}>toLowerCase</button>
      <button className="btn btn-primary mx-2 my-3" onClick={removeExtraSpaces}>Remove Extra Spaces</button>

    </div>
  )
}
