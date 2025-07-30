import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 const addValue = ()=> {
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
  setCount(prevCount => prevCount + 1) // Is traha se use karna chahiye
  // Nahi hoga kyuki react in sabko ek bunch me send karta hain 

  if(count === 20){
    setCount("enter the value below 20")
  }

 }
 const removeValue = ()=> {
  setCount(count - 1)
  if(count === 0){
    setCount("enter the value above 0")
  }

 }

  return (
    <>
      <h1>Counter App : {count}</h1>
      <hr />
      <button 
      onClick={addValue}
      >Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <p>{count}</p>
   
    </>
  )
}

export default App
