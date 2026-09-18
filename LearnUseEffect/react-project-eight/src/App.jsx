import { useEffect } from 'react'
import './App.css'


function App() {

  //first -> side-effect function
  //second -> clean-up function
  //third -> comma seprated dependencies list

  //Variation 
  //variation 1: Runs on every render

 useEffect(() => {

  alert("hello")
 })

  return (
    <div>
      Hello 
    </div>
  )
}

export default App
