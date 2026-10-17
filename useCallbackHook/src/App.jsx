import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';

function App() {

  const [count, setCount] = useState(0);


  const handleclick = useCallback(() =>{
    setCount(count+1);
  }, [count]);


  return (
    <div>
      <div>
        Count : {count}
      </div>
      <div>
        <button onClick={handleclick}>
          Click
        </button>
      </div>
      <br>
      </br>
      <div>
        <ChildComponent buttonName="Click me" 
        handleclick={handleclick}/>
      </div>
    </div>
  )
}

export default App
