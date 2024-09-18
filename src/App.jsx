
import './App.css'
import { useState } from 'react';



function App() {
  return (
    <>
      <div className="main-div">
        <h1 className="h1-text">Counters that update separately</h1>

        
        <div className='btn1'><MyButton /></div>
        <div className='fabi'>
          <MyButton />
        </div>
      </div>
    </>
  )
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default App
