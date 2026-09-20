import { useState, useEffect } from "react";
import TimerComponet from "./TimerComponent/TimerComponent";

function App(){

  const [minute, setMinute] = useState(0);

  useEffect(()=>{
    
    const minutes = setInterval (() =>{
      setMinute(preMinute => preMinute +1);

    }, 60000);

    return() => {
      clearInterval(minutes);
    }
  }, []);


  return(
    <>
    <h1>Minutes: {minute}</h1>
    
    <TimerComponet />
    Hello 
    </>
  )
}
export default App;