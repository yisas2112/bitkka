import React from 'react'
import './index.scss'
import ImagenBotonesDePago from '../../images/botonesdepago.svg'
import DonarConBitcoin from '../../images/donarconbitcoin.svg'
import DonarConBitcoinHover from '../../images/donarconbitcoinhover.svg'
import Circulo from '../../images/homeseguridadcirculo.svg'
import LogoBtn from '../../images/btn_logo.svg'

const BotonesDePago = ()=>{
    return <>
        <div id='botonesDePago' className='container'>            
            <div className='botonedepago__container'>
                <div className='botondepago__imagen'>
                    <img src={ImagenBotonesDePago}/>
                </div>
                <div className='botondepago__texto'>
                    <h1>Botones de pago a medida de tu negocio</h1>
                    <p>Podrás configurar tus botones tomando como referencia la moneda de base BTC / USD/ EUR según lo que tu negocio requiera.<br/>
                    <br/>
                    Si al momento de crear tus botones eliges como moneda de referencia el USD / EUR.<br/>
                    <br/>
                    Tus clientes podrán ver el importe en estas monedas de base y su equivalente en
                    Bitcoin con nuestro sistema de conversión instantánea BTC / USD / EUR.<br/>
                    <br/>
                    Una vez insertados los botones en tu web o tienda online, al interactuar con ellos tus clientes visualizaran una factura con la descripción de tu producto, el código de producto e
                    importe a pagar.<br/>
                    <br/>
                    Tu cliente siempre realizará el pago en Bitcoin mediante código QR o
                    Billetera.
                    </p>
                </div>
            </div>
            <div className='tiposdebotones__container'>
                <div className='tipodebotones_titulo'>
                    <h2>Tipos de Botones</h2>                    
                </div>
                <div className='tiposdebotones__botones'>
                    <h3>Boton de Importe Fijo</h3>                    
                    <button className='btn__prueba'>
                    <div className='container__button'>
                        <div className='btn_image'><img src={LogoBtn}></img></div>                    
                        <div className='btn__text'><b>COMPRAR</b> con Bitcoin </div>
                    </div>
                    </button>
                    <p className='tipodebotones__parrafo' >Esta opción permite crear un botón de pago para un producto o servicio con importe
                        fijo, un precio único según lo preestablecido al momento de crear el botón.
                        
                        Este tipo de botones puede ser utilizado para la venta de cualquier tipo de producto o
                        servicio online que implique el pago único para su adquisición.</p>
                </div>
                <div className='tiposdebotones__botones'>
                    <h3>Boton de Importe Variable</h3>
                    <button className='btn__prueba'>
                    <div className='container__button'>
                        <div className='btn_image'><img src={LogoBtn}></img></div>                    
                        <div className='btn__text'><b>COMPRAR</b> con Bitcoin </div>
                    </div>
                    </button>
                    <p className='tipodebotones__parrafo'>Esta opción permite crear un botón de pago con la descripción de un producto o
                    servicio en particular, pero sin un precio fijo. El cliente es quien colocara el importe a
                    pagar luego de accionar el botón de pago.
                    Este tipo de botones puede ser utilizado en negocios donde el cliente es quien decide
                    cuanto capital aportará, pagará o donará.</p>
                    
                </div>            
            </div>            
            <div className='instalacion__container'>
                <div className='instalacion__titulo'>
                    <h2>Instalación</h2>
                </div>
                <p className='instalacion__descripcion'>Una vez disponga de tu cuenta en Bitkkahpay podrás crear botones de pagos en
                minutos. No se requiere disponer de amplios conocimientos en programación.</p>
                <div className='instalacion__pasos'>
                    <div className='instalacion__pasos__circulo'>
                        <img className='instalacion__pasos__circulo__imagen' src={Circulo}/>
                        <p className='instalacion__pasos__circulo__numero'>1</p>
                    </div>
                    <span className='instalacion__pasos__texto'>Elige entre tu Botón de Pago con importe fijo o variable.</span>
                </div>
                <div className='instalacion__pasos'>
                    <div className='instalacion__pasos__circulo'>
                    <img className='instalacion__pasos__circulo__imagen' src={Circulo}/>
                    <p className='instalacion__pasos__circulo__numero'>2</p>
                    </div>
                    <span className='instalacion__pasos__texto'>Rellena los campos: Código – Descripción – Precio – Moneda de Base.</span>
                </div>
                <div className='instalacion__pasos'>
                    <div className='instalacion__pasos__circulo'>
                    <img className='instalacion__pasos__circulo__imagen' src={Circulo}/>
                    <p className='instalacion__pasos__circulo__numero'>3</p>
                    </div>
                    <span className='instalacion__pasos__texto'>Copia y pega en tu web el código script generado.</span>
                </div>
                <div className='instalacion__soporte'>Contamos con soporte técnico y comercial 24/7 en nuestro Chat Online.</div>
                <div className='instalacion__button__container'>
                <button className='instalacion__button'>¡Comienza ya a cobrar en bitcoins!</button>
                </div>
            </div>            
        </div>
    </>
}

export default BotonesDePago;