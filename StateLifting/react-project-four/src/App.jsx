import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  //create state
  //manage state
  //change state
  //Sabhi child me state ko sync karege

  const [name, setName] = useState('');
  return (
    <div>
      <Card title="card1" name={name} setName={setName}/>
      <Card title="card2" name={name} setName={setName}/>
      {/* <p>I am inside parent Component and Value of name is {name}</p> */}
    </div>
  )
}

export default App
