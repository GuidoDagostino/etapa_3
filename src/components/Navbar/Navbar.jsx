import React, { useContext, useState } from 'react'
import  './Navbar.scss'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("inicio");
    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link> 
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("inicio")} className={menu==="inicio"?"active":""}>Inicio</Link>
        <a href='#menusec'onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#footer'onClick={()=>setMenu("contacto")} className={menu==="contacto"?"active":""}>Contacto</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/Carrito'> <img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()>0?"dot":""}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Ingresar</button>
      </div>
    </div>
  )
}

export default Navbar
