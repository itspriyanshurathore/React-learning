import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-red-400 p-4 text-black m-4 rounded-4xl'>Tailwind Css</h1>
     <Cards username="priyanshu" btn="Know More"/>
     <Cards/>
  
    </>
  )
}

export default App
