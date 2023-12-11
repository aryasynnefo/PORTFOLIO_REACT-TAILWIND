import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Links from './Components/Links/Links'

function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
   <Portfolio/>
   <Skills/>
   <Contact/>
    <Links/>
    </>
  )
}

export default App
