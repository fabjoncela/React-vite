
import './App.css'
import { useState } from 'react';



function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <div className="main-div">
        <h1 className="h1-text">Counters that update together</h1>
        <div className='btn1'>
          <MyButton count={count} onClick={handleClick}/></div>
        <div className='fabi'>
          <MyButton count={count} onClick={handleClick}/></div>
      </div>
    </>
  )
}

function MyButton({count, onClick}) {
 

  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default App
