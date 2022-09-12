// import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Logo } from './components/Logo/Logo'
import { Request } from './components/Request/Request'


// import { BrowserRouter, Routes as Router } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
      <Logo />
      <Request />
      </div>

      <Footer />
    </div>
  )
}

export default App
