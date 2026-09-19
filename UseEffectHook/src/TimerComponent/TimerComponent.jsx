import { useEffect, useState } from 'react'


function TimerComponet() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    
    const intervalId = setInterval (() => {
      console.log("setInterval executed");
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return() => {
      console.log("Time to stop");
      clearInterval(intervalId);
    }
  }, []);
  //It will run on first render

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  );
}

export default TimerComponet;
