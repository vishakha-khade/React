import { useState } from 'react'

function App() {

  function handleClick(){
    alert("I am clicked");
  }

    function handleMouseOver() {
      alert("para ke upar mouse leke aaye ho")
    }

    function handleInputChange(e){
      //console.log("Input value change")
      console.log(" Value till now :", e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
      //I' am writing my custom behaviour
      alert("Confirm form Submit")
    }
  return (
    <div>

    <button onClick={() => alert("button Click hu hai")}>
      Click me
    </button>

      {/* <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange} />
        <button type='submit'> Submit</button>
      </form> */}

      {/* <p onMouseOver={handleMouseOver} style={{border: "1px solid black"}}>
        I'am m para
      </p>

     <button onClick={handleClick}>
        Click me
     </button> */}
    </div>
  )
}

export default App
