import React, { useState } from 'react'
import './LoginPopup.scss'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Registrarse");

  return (
    <div className='login-popup'>
        <div className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2> <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Registrarse"?<input type="text" placeholder='Ingresa tu nombre' />:<></>}
                <input type="email" placeholder='Ingresa tu correo' />
                <input type="password" placeholder='Contraseña' />
            </div>
            <button>{currState==="Ingresar"?"Ingresar":"Crear cuenta"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" name="" id="" />
                <p>Al aceptar, estas aceptando los terminos y condiciones.</p>
            </div>
            {currState==="Ingresar"
                ?<p>Crear una nueva cuenta? <span onClick={()=>setCurrState('Registrarse')}>Registrate</span></p>
                :<p>Ya tenes usuario? <span onClick={()=>setCurrState('Ingresar')}>Ingresar</span></p>
            }
        </div>
    </div>
  )
}

export default LoginPopup
