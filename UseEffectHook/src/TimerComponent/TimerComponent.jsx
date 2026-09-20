import { useEffect, useState } from 'react'


function TimerComponet() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    
    const intervalIn = setInterval (() => {
      console.log("setInterval executed");
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    //It will run on first render 
    
    return() => {
      console.log("Time to stop");
      clearInterval(intervalIn);
    }
  }, []);

  //[ Variation : 5: 

  // useEffect(() => {
  //   alert("Count is updated")
  //   return()=>{
  //     alert("count is unmounted from Ui");
  //   }
  // }, [seconds]).. ]...

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  );
}


export default TimerComponet;
