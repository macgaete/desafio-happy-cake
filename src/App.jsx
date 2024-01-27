import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/navbar'
import Nosellama from './assets/Views/Nosellama'
import HomePage from './assets/Views/HomePage'
import About from './assets/Views/About'
import Contact from './assets/Views/Contact'
import {Routes, Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='*' element={<Nosellama/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/> 
    </Routes>

    </>
  )
}

export default App
