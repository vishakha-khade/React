import React, {useState} from 'react';

import './App.css'

function App() {

  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [javascript, setJavascript] = useState(false);

    return (
     <div>
      
      <form>
        <input 
        type='checkbox'
        value='html'
        checked = {html}
        onChange={(e) => {
          setHtml(e.target.checked);
        }}
        />HTML
        <br/>
        <input 
        type='checkbox'
        value='css'
        checked = {css}
        onChange={(e)=>{
           setCss(e.target.checked);

        }}
        />Css
        <br/>

        <input
        type='checkbox' 
        value='javascript'
        checked = {javascript}
        onChange={(e)=>{
        setJavascript(e.target.checked);
        }}
        />Javascript
      </form>

      {/* <form>
        <h1>Select Gender : {gender}</h1>

        <input 
        type='radio'
        name='gender'
        value='male'
        onChange={(e) => {
         if(e.target.checked) {
            setGender(e.target.value);
         }
         console.log(e.target.value);
        }}/> Male
        <br/>
        <input 
        type='radio'
        name='gender'
        value='female'
        onChange={(e) => {
          if(e.target.checked){
            setGender(e.target.value);
          }
          console.log(e);
        }}
        /> Female
        
      </form> */}

      {/* {name} */}
        {/* <input
        type='text'
        placeholder="Enter your name.."
        onChange={(e)=>{
          setName(e.target.value)
        }} 
        /> */}

     </div>
    );
}

export default App
