import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () =>{
    counter = counter+1
    setCounter(counter)
  }
  const removeValue = () =>{
    counter = counter-1
    setCounter(counter)
  }
  return(
    <>
    <h1>React Basic Project</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Increment Value</button>
    <br />
    <br />
    <button onClick={removeValue}>Decrement Value</button>
    </>
  )
}

export default App
