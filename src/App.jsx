// import { useState } from 'react'
import './App.css'
import  'bootstrap/dist/css/bootstrap.min.css'
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
import Dashboard from './components/Dashboard/Dashboard'
//import Notification from './components/SlidebarMenu/Notification'



// import { BrowserRouter, Routes as Router } from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          // Estas son las rutas que corresponden al 'login'
          <Route path='/login' element={<Login/>}/>
          <Route path='/restorepassword' element={<RestorePassword/>}/>
          <Route path='/changepassword' element={<ChangePassword/>}/>
          <Route path='/recoverysuccess' element={<RecoverySuccess/>}/>
          {/*Rutas Dashboard // iré modificando los elementos a medida que los cree */}
          <Route path='/home' element={<Dashboard/>}/>
          <Route path='/noti' element={<Dashboard/>}/>
          <Route path='/documents' element={<Dashboard/>}/>
          <Route path='/myteam' element={<Dashboard/>}/>
          <Route path='/settings' element={<Dashboard/>}/>
          <Route path='/logout' element={<Dashboard/>}/>
          {/*Rutas del Navbar // modificare los elementos a medida que los cree*/}
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/schedule' element={<Dashboard/>}/>
          <Route path='/inbox' element={<Dashboard/>}/>
          <Route path='/payment' element={<Dashboard/>}/>
        </Routes>
      
      </BrowserRouter>
 
    </div>
  )
}

export default App
