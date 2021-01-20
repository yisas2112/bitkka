import React from 'react'
import './index.scss'
import imageHome from '../../images/imagehome.svg'
import logoHome from '../../images/logohome.svg'
import textoHome from '../../images/textohome.svg'
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
const Home = ()=>{
    return <>
        <div id='home'>            
            <div className='container images__home mb-3'>
                <img className='imagenHome' src={imageHome}></img>
                <img className='logoHome' src={logoHome}></img>
                <img className='textoHome' src={textoHome}></img>
            </div> 
            
            <div className='home__pastillas container-fluid mb-4'>
                <div className='home__pastillas__items'>
                    ¡Cobrá al instante en Bitcoin!
                </div>
                <div className='home__pastillas__items'>
                    Vendé tu Productos y Servicios al Mundo.
                </div>
                <div className='home__pastillas__items_sinborde'>
                    Recibe Donaciones para tu Proyecto
                </div>
            </div> 
            <div className='home__ventajas container-fluid'>                
                <div>
                    <h2>Vetanjas</h2>
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
                <div>
                    <img src={homeVentajas} className='home__ventajas__image'/>
                </div>
            </div>
            <div className='home__integracion'>
                <div>
                    <img className='home__integracion__image' src={homeIntegracion}/>
                </div>
                <div>
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
                <img className='home_vendeproductosservicios__image' src={HomeProductosServicios}/>                
            </div>
            <div className='home__seguridad__container'>
                <img className='home__seguridad__image' src={HomeSeguridad}/>
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