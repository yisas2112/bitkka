import React from 'react'
import logo from '../../images/logosecciones.svg';
import './index.scss'
import { Link } from 'react-router-dom';
import $ from 'jquery'
import Logomobile from '../../images/logomobile.svg'
import iconMenuMobile from '../../images/iconmenumobile.svg'
import LogoWhite from '../../images/logofooter.svg'
import iconCruz from '../../images/iconmenumobilecruz.svg'


const Nabvar = ()=>{       

    const addClass = ()=>{                    
            $("#menu__list__items").on('click', 'li', function () {
                $(".nav-item").removeClass("active");                
                $(this).addClass("active");
            });
            
            
    }
    const removeClass = ()=>{        
            $(".nav-item").removeClass("active");                          
                        
        
    }

    const showMenu =()=>{
        var x = document.getElementById("menu__list__items_mobile");
        if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
          var x = document.getElementById("menu__list__items");
        if (x.style.display === "none") {
            x.style.display = "block";
            
          } else {
            x.style.display = "none";
          }
    }    
    

    
   return <>
    <div id='nabvar'>
        <Link to='/bitkka' onClick={removeClass} className='logo' ><img src={logo} id='logo'></img></Link>
        <Link to='/bitkka' className='logomobile' ><img id='logomobile' src={Logomobile}/></Link>         
        <button onClick={showMenu} className='iconMenuMobile'><img src={iconMenuMobile}></img></button>
        <div id='menu__list__items_mobile' style={{display: 'none'}}>
            <div className='menu__list__items__logo__cerrar'>
                <Link to='/bitkka'><img src={LogoWhite} className='logowhite'></img></Link>
                <button onClick={showMenu} className='iconCruz'><img src={iconCruz}></img></button>
            </div>
            <ul id='menu__list__items' style={{display: 'none'}} >
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