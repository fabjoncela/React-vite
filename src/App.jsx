
import './App.css'
import { useState } from 'react';



function App() {
  return (
    <>
      <div className="bg-red-500 p-5">
        <h1 className="text-white">Counters that update separately</h1>
        
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
