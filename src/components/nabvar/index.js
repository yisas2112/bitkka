import React from 'react'
import logo from '../../images/logo.svg'
import './index.scss'

const Nabvar = ()=>{
   return <>
    <div id='nabvar'>
        <img id='logo' src={logo}/>                
        <ul id='menu__list__items'>
            <li className="nav-item active">
                <a className="nav-link" href="#">Botones de Pago</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Vender con BTC</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Beneficios</a>
            </li>            
            <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
            </li>                
            <li className="nav-item">
                <button className="nav-link" href="#">Iniciar Sesión</button>
            </li>                
            <li className="nav-item">
                <button className="nav-link" href="#">Crear Cuenta</button>
            </li>
            <li className="nav-item">
                <a className='nav-link' href='#'>EN</a>
            </li>                
        </ul>
    </div>
   </>
    
}


export default Nabvar