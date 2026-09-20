import { useState } from 'react'
import './App.css'
import Button from './components/button';
import Card from './components/card';

function App() {
  const [count, setCount]= useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (

    <div>
      <Button handleClick ={handleClick} 
      text="click me">
        <h1>{count}</h1>

      </Button>
      {/* <Card name="Vishakha">
        <h1>Best Web Developer</h1>
        <p>Trying to be consistent in this journey</p>
        <p>we will complete this journey soon</p>
      </Card>
      <Card children="Hello i'm children">
       
      </Card> */}
    </div>
  )
}

export default App
