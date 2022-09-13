// import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Logo } from './components/Logo/Logo'
import { Request } from './components/Request/Request'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RestorePassword from './components/Login/RestorePassword'
import RecoverySuccess from './components/Login/RecoverySuccess'
import Login from './components/Login/Login'
import ChangePassword from './components/Login/ChangePassword'


// import { BrowserRouter, Routes as Router } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          // Estas son las rutas que corresponden al 'login'
          <Route path='/login' element={<Login/>}/>
          <Route path='/restorepassword' element={<RestorePassword/>}/>
          <Route path='/changepassword' element={<ChangePassword/>}/>
          <Route path='/recoverysuccess' element={<RecoverySuccess/>}/>
        </Routes>
      
      </BrowserRouter>
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
