import React from 'react'
import './header.css'
import logo from '../images/Logo_Mesa de trabajo 1.png'
function Header() {
    return (
        <div>
         <img src={logo} alt="Logo" className="header-logo" />  
        </div>
    )
}

export default Header
