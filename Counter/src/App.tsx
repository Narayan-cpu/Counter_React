import {useState} from 'react';
import "./App.css";
const App = () => {
  const [count,setcount]=useState(0);
  function increment(){
    setcount(previous=>previous+1);
  }

   function decrement(){
    setcount(previous=>previous-1); 
   }
  return (
    <div>
      <h1 >Counter :</h1>

      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement} >-</button>
    </div>
  )
}

export default App
