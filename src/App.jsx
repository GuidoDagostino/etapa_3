import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio'
import Carrito from './pages/Carrito/Carrito'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import DireccionEnvio from './pages/DireccionEnvio/DireccionEnvio'

const App = () => {

  const[showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin ={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/DireccionEnvio' element={<DireccionEnvio/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
