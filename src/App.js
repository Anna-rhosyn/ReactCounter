import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState(0);
  //counter- state - To hold values

  function incrementCounter(){
    setCounter(counter+1);
  }
  function decrementCounter(){
    if(counter!=0){
      setCounter(counter-1);
    }
   
  }
  function reset(){
      setCounter(0);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Counter Application</h3>
        <h2>{counter}</h2>
        <button 
        style={
          {backgroundColor:'green',color:'black',padding:'10px'}
          } 
        onClick={incrementCounter}>Increment</button>
        <br></br>
        <button 
         style={
          {backgroundColor:'red',color:'black',padding:'10px'}
          } 
        onClick={decrementCounter}>Decrement</button>
        <br></br>
        <button 
         style={
          {backgroundColor:'white',color:'black',padding:'10px'}
          } 
        onClick={reset}>Reset All</button>
      </header>
    </div>
  );
}

export default App;
