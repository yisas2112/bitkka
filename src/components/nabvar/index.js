import React from 'react'
import logo from '../../images/logo.svg'
import logosecciones from '../../images/logosecciones.svg';
import './index.scss'
import { Link } from 'react-router-dom';
import $ from 'jquery'


const Nabvar = ()=>{       

    const addClass = ()=>{                    
            $("#menu__list__items").on('click', 'li', function () {
                $(".nav-item").removeClass("active");                
                $(this).addClass("active");
            });
            document.getElementById('logo').style.display = 'none';
            document.getElementById('logosecciones').style.display = 'block';
    }
    const removeClas = ()=>{        
            $(".nav-item").removeClass("active");                          
            document.getElementById('logo').style.display = 'block';
            document.getElementById('logosecciones').style.display = 'none';
        
    }

    
   return <>
    <div id='nabvar'>
        <Link to='/bitkka' onClick={removeClas}><img id='logo' src={logo}/><img src={logosecciones} id='logosecciones'></img></Link> 
        <ul id='menu__list__items'>
            <li className="nav-item">
                <Link to='/bitkka/botonesdepago' onClick={addClass} className="nav-link">Botones de Pago</Link>
            </li>
            <li className="nav-item">
                <Link to='/bitkka/venderconbtc' onClick={addClass} className="nav-link">Vender con BTC</Link>
            </li>
            <li className="nav-item">
                <Link to='/bitkka/beneficios' onClick={addClass} className="nav-link">Beneficios</Link>
            </li>            
            <li className="nav-item">
               <Link to='/bitkka/nosotros' onClick={addClass} className="nav-link">Nosotros</Link>
            </li>                
            <li className="nav-item">
                <button className="nav-link mr-2" href="#">Iniciar Sesión</button>
            </li>                
            <li className="nav-item">
                <button className="nav-link" href="#">Crear Cuenta</button>
            </li>
            <li className="nav-item idioma">
                <a className='nav-link idioma' href='#'>EN</a>
            </li>                
        </ul>
    </div>
   </>
    
}


export default Nabvar