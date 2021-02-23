import React from 'react'
import './index.scss'
import imageHome from '../../images/imagehome.svg'
import logoHome from '../../images/logohome.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import homeVentajas from '../../images/homeventajas.svg'
import homeIntegracion from '../../images/homeintegracion.svg'
import homeSeccionBlackUno from '../../images/homecuartaseccionuno.svg'
import homeSeccionBlackDos from '../../images/homecuartasecciondos.svg'
import homeSeccionBlackTres from '../../images/homecuartasecciontres.svg'
import HomeStreamersYoutubers from '../../images/secctionstreamers.svg'
import HomeProductosServicios from '../../images/vendeproductosyservicvios.svg'
import HomeSeguridad from '../../images/homeseguridad.svg'
import HomeSeguridadCirculo from '../../images/homeseguridadcirculo.svg'
import ImagenHomeMobile from '../../images/imagenHomeMobile.svg'
const Home = ()=>{
    return <>
        <div id='home'>            
            <div className='container images__home mb-3'>
                <img className='imagenHome' src={imageHome}></img>
                <img className='imagenHomeMobile' src={ImagenHomeMobile}></img>
                <img className='logoHome' src={logoHome}></img>
                <div className='textoHome_container'>
                <h1 className='textoHome'>La Primer Plataforma de cripto-pagos</h1>
                </div>
                
            </div>             
            <div className='home__pastillas container-fluid mb-4'>
                <div className='home__pastillas__items'>
                    ¡Cobrá al instante en Bitcoin!
                </div>
                <div className='home__pastillas__divisor'></div>
                <div className='home__pastillas__items'>
                    Vendé tu Productos y Servicios al Mundo.
                </div>
                <div className='home__pastillas__divisor'></div>
                <div className='home__pastillas__items'>
                    Recibe Donaciones para tu Proyecto
                </div>
                <button>¡Comienza ya a cobrar en bitcoins!</button>
            </div> 
            <div className='home__ventajas'>                
                <div className='home__ventajas__texto__container'>
                    <h2>Ventajas</h2>
                    <div className='home__ventajas__texto'>
                        Sin necesidad de asociar una Tarjeta de Crédito
                    </div>
                    <div className='home__ventajas__divisor'></div>
                    <div className='home__ventajas__texto'>
                        No requiere vincular una cuenta bancaria
                    </div>
                    <div className='home__ventajas__divisor'></div>
                    <div className='home__ventajas__texto'>
                        Sin controversias ni cancelaciones de pagos
                    </div>
                    <div className='home__ventajas__divisor'></div>
                </div>
                <div className='home__ventajas__image__container'>
                    <img src={homeVentajas} className='home__ventajas__image'/>
                </div>
            </div>
            <div className='home__integracion'>
                <div className='home__integracion__image__container'>
                    <img className='home__integracion__image' src={homeIntegracion}/>
                </div>
                <div className='home__integracion__text_container'>
                    <h2>Integración en Minutos</h2>
                    <div className='home__integracion__text'>
                        Abre tu Cuenta
                    </div>
                    <div className='home__integracion__divisor'></div>                    
                    <div className='home__integracion__text'>
                        Crea tus botones de pago o donación
                    </div>
                    <div className='home__integracion__divisor'></div>
                    <div className='home__integracion__text'>
                        Insertalo en tu web e inicia su comercio en BTC
                    </div>
                    <div className='home__integracion__divisor'></div>
                </div>            
            </div>    
            <div className='home__seccionblack'>
                <div className='home__seccionblackContent'>
                    <img className='home__seccionblackContent__images' src={homeSeccionBlackUno}/>
                    <div className='home__seccionblackContent__divisor'></div>
                    <div className='home__seccionblackContent__text'>
                        <span>Recube tu pago inmediato en Bitcoin</span>
                    </div>
                </div>
                <div className='home__seccionblackContent'>
                    <img className='home__seccionblackContent__images' src={homeSeccionBlackDos}/>
                    <div className='home__seccionblackContent__divisor'></div>
                    <div className='home__seccionblackContent__text'>
                        <span>Contacta directamente con tu cliente</span>
                    </div>
                </div>
                <div className='home__seccionblackContent'>
                    <img className='home__seccionblackContent__images' src={homeSeccionBlackTres}/>
                    <div className='home__seccionblackContent__divisor'></div>
                    <div className='home__seccionblackContent__text'>
                        <span>Coordinala entrega vía mail, Whatsapps o Telegram</span>                        
                    </div>
                </div>
            </div>
            <div className='home__streamersyoutbers'>
                <div className='home__streamersyoutbers__image'>
                    <img src={HomeStreamersYoutubers}/>
                </div>
                <div className='home__streamersyoutbers__text'>
                    <h2>Ideal para Streamers y Youtubers</h2>
                    <div className='home__streamersyoutbers__text__info'>
                        Recibe apoyo de tus seguidores de forma inmediata en Bitcoin, con referencia en USD / EUR
                    </div>
                    <div className='home__streamersyoutbers__text__info'>
                        Tu seguidor podrá donarte la cantidad que él desee o podras generar tarifas fijas
                    </div>
                </div>
            </div>
            <div className='home_vendeproductosservicios'>
                <div className='home_vendeproductosservicios__text'>                    
                    <h2>Vende tus Productos y Servicios en Bitcoin</h2>                    
                    <div className='home_vendeproductosservicios__text__info'>
                        Pagos con Codigo QR 
                    </div>
                    <div className='home_vendeproductosservicios__text__info'>
                        Pagos a traves de Wallets
                    </div>
                </div>
                <div className='home_vendeproductosservicios__image'>
                <img src={HomeProductosServicios}/>                
                </div>               
            </div>
            <div className='home__seguridad__container'>
                <div className='home__seguridad__image'>
                <img src={HomeSeguridad}/>
                </div>
                <div className='home__seguridad__text__container'>
                    <div className='home__seguridad__titulo_container'>
                        <h2>Seguridad</h2>
                        <div>
                            <img src={HomeSeguridadCirculo}/>
                            <p>Más Confiable</p>
                        </div>
                    </div>
                    <div className='home__seguridad__text'>
                        Tecnologia Incriptada
                    </div>
                    <div className='home__seguridad__text'>
                        Seguridad antifraudes
                    </div>
                    <div className='home__seguridad__text'>
                        Servidores Jardenizados 
                    </div>
                </div>

            </div>

        </div>
    
    </>
}

export default Home