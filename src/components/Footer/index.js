import React from 'react'
import './index.scss'
import HomeSoporte from '../../images/homesoporte.svg'
import LogoFooter from '../../images/logofooter.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare , faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import $ from 'jquery'


const Footer = ()=>{

    const onClickUp = ()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
            
        
    }
    return <>
        <div id='Footer'>
            <div className='footer__soporte_container'>
                <div className='footer__soporte__text'>
                    <h2>Soporte</h2>
                    <div className='footer__soporte__text__info'>
                        Chat Online 24/7 Clientes Registrados
                    </div>
                    <div className='footer__soporte__text__info'>
                        Conferencias técnicas y comerciales por Zoom
                    </div>
                    <div className='footer__soporte__text__info'>
                        Acuerdos Especiales para Empresas
                    </div>                
                </div>
                <div className='footer__soporte__image__container'>
                <img src={HomeSoporte}/>
                </div>
            </div>
            <div className='footer__contacto__container'>
                <img className='footer__contacto_logo' src={LogoFooter}/>
                <div className='footer__contacto__columnas'>
                    <div className='footer__contacto__column'>
                        <h3>Comunidad</h3>
                        <button href="#">Crear Cuenta</button>
                        <button href="#">Crear Cuenta</button>
                        <div>
                        <FontAwesomeIcon className='footer__icons__redes' icon={faFacebookSquare} />
                        <FontAwesomeIcon className='footer__icons__redes' icon={faInstagram} />
                        <FontAwesomeIcon className='footer__icons__redes' icon={faTwitter} />                            
                        </div>
                    </div>
                    <div className='footer__contacto__column'>
                        <h3>Servicios</h3>
                        <a href="#">Botones de Pago</a>
                        <a href="#">Vender con BTC</a>
                        <Link to='/bitkka/tarifas' onClick={onClickUp}>Tarifas</Link>
                    </div>
                    <div className='footer__contacto__column'>
                        <h3>Politicas</h3>
                        <Link to='/bitkka/privacidad' onClick={onClickUp}>Politica de Privacidad KYC/AML</Link>
                        <a href="#">Términos, Acuerdos Legales y Condiciones</a>
                             
                    </div>
                    <div className='footer__contacto__column'>
                        <h3>Contacto</h3>
                        <Link to='/bitkka/contacto' onClick={onClickUp}>Contáctanos</Link>
                        <a href="#">Chat online 24/7 para clientes Registrados</a>                        
                    </div>
                </div>
                <div className='footer__derechos'>
                    <div className='footer__derechosreservados'>
                        © 2020-2021 All rights reserved
                    </div>
                    <div className='footer__derechosreservados__datos'>
                    BITKKAH UO - REGISTRY CODE: 14929610 - FINANCIAL LICENCE: FVT000049 / CATEGORY: FINANCIAL SERVICES - VIRTUAL CURRENCIES
                    </div>
                </div>
            </div>
            
            
        </div>

    </>
}

export default Footer;