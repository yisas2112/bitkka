import React from 'react';
import './index.scss';
import ImagenHeader from '../../images/recibetuspagos.svg'
const VenderConBTC = ()=>{
    return <>
    <div id='VenderConBTC'>
        <div className='venderConBTC__titulo__imagen'>
            <div className='venderConBTC__titulo__texto'>
                <h2>Recibe tus pagos en criptomonedas al instante</h2>
                <p>La plataforma de pagos cripto Bitkkapay, te permite cobrar tus productos y servicios en
                Bitcoin (BTC), al margen de que la moneda de referencia de tu empresa sea el USD o el EUR.</p>
                <p>Cada pago que tu negocio reciba mediante tus botones de pago se acreditara en el
                BackOffice de tu cuenta Bitkkahpay.</p>
                <p>El saldo de tu cuenta estará reflejado en Bitcoin y podrás realizar retiros sin limites y
                en todo momento a tu wallet u Exchange de confianza.</p>
                <p>Si la administración de tu negocio tiene como referencia el USD o el EUR tu cuenta en
                BitkkahPay te permitirá convertir tus BTC a USD o EUR dentro de tu misma cuenta y así
                evitar la variación en la cotización del Bitcoin.</p>
                <p>Cada pago que reciba dispara una alerta y queda alojado en su cuenta, como también
                la información del cliente para poder contactarlo y hacer entrega del producto o
                servicio.
                </p>
            </div>
            <img src={ImagenHeader}/>               
        </div>
        <button className='venderConBTC__btn'>¡Comienza ya a cobrar en bitcoins!</button>
        <div className='vendeConBTC__more__info'>
            <div className='vendeConBTC__more__info__texto'>
                <h2>Cobra en bitcoin, la moneda del momento</h2>
                <p>Desde la perspectiva del usuario, Bitcoin no es más que una aplicación móvil o de escritorio que provee un monedero Bitcoin personal y permite al usuario enviar y recibir bitcoins con el. Así es como funciona Bitcoin para la mayoría de los usuarios.</p>
                <p>Detrás de las cámaras, la red Bitcoin comparte una contabilidad pública llamada "block chain". Esta contabilidad contiene cada transacción procesada, permitiendo verificar la validez de cada transacción. La autenticidad de cada transacción esta protegida por firmas digitales correspondientes a las direcciones de envío, permitiendo a todos los usuarios tener control total al enviar Bitcoins desde sus direcciones Bitcoin.</p>
            </div>
            <div className='vendeConBTC__more__info__texto'>
                <h2>¿Lo utiliza realmente la gente?</h2>
                <p>Sí. Existe un número creciente de negocios e individuos usando Bitcoin. Esto incluye negocios tradicionales como restaurantes, casas, bufetes de abogados y servicios de Internet populares como Namecheap, Wordpress, Reddit y Flattr. Aunque Bitcoin sigue siendo un fenómeno relativamente nuevo, esta creciendo rápido. A finales de Agosto de 2013, el valor de todos los bitcoins en circulación superaba los 1.5 billones de dólares y cada día se intercambiaban el equivalente a millones de dólares en bitcoins.</p>
            </div>
            <div className='vendeConBTC__more__info__texto'>
                <h2>¿Es Bitcoin totalmente virtual e inmaterial?</h2>
                <p>Bitcoin es tan virtual como las tarjetas de crédito y las redes bancarias que la gente usa cada día. Bitcoin puede usarse para pagar online y en tiendas físicas como cualquier otra moneda. Los saldos de bitcoins están guardados en una inmensa red y no pueden ser alterados fraudulentamente por nadie. En otras palabras, los usuarios de Bitcoin tienen control exclusivo sobre sus fondos y los bitcoins no pueden desvanecerse solo porque sean virtuales.</p>
            </div>
            <button className='venderConBTC__more__info__button' ><a href='https://bitcoin.org/es/faq#general' target='blank'>Quiero saber más sobre bitcoins</a></button>
            
        </div>

    </div>
    
    
    
    </>
}


export default VenderConBTC;


