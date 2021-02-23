import React from 'react';
import './index.scss'
import PrimerImagen from '../../images/beneficiosprimerimagen.svg'
import SegundaImagen from '../../images/beneficiosimagensegunda.svg'



const Beneficios = ()=>{
    return <>
        <div id='beneficios'>
            <div className='beneficios__header__container'>
                <div className='beneficios__header'>
                    <h1>Con Bitkkahpay cada pago que recibas no tiene la posibilidad de un retroceso o cancelación.</h1>
                    <p>En todo comercio la seguridad de pagos es fundamental si lo que se
                        pretende es evitar pérdidas de dinero.</p>
                    <p>Como es de publico conocimiento vender en línea nos da la posibilidad de llegar con
                        nuestros productos y servicios al publico masivo mundial. Esto es una gran ventaja,
                        pero nos exponemos a maniobras como cancelaciones de pagos luego de entregar
                        nuestros productos o servicios.
                    </p>
                </div>                
                    <img src={PrimerImagen}/>
                
            </div>
            <div className='beneficios__seccion_uno__container'>
                <div className='beneficios__seccion_uno'>
                    <h2>Pagos Garantizados para tu Negocio</h2>
                    <p>
                    El <strong>sistema de Blokchain</strong> de Bitkkahpay no permite la posibilidad de reintegros ni cancelaciones a diferencia de entidades financieras, donde los pagos con
                    tarjetas de crédito y/o transferencias bancarias  tienen la posibilidad de cancelar
                    una transacción ya realizada generando una controversia y haciendo perder al comerciante dinero, productos y tiempo.
                    </p>
                </div>
            </div>
            <div className='beneficios__seccion_dos__container container'>
                <div className='beneficios__seccion_dos__titulo__texto'>
                    <h2>En Bitkkahpay no existe la posibilidad de bloqueo de fondos para el comerciante. </h2>
                    <div>
                        <p>A diferencia de otras instituciones ya sean bancos u otras plataformas y/o
                        procesadores de pago, nuestro objetivo es proteger siempre la cuenta del comerciante.</p>
                        <p>El cliente acepta nuestros términos y condicione antes de realizar un pago donde se
                        establece la NO POSIBILIDAD de retrocesos ni cancelaciones mediante controversias.</p>
                    </div>
                    <button className='beneficios__seccion_dos_button'>¡Comienza ya a cobrar en bitcoins!</button>
                </div>
                <div className='beneficios__seccion_dos__imagen__container'>
                    <img  className='beneficios__seccion_dos__imagen' src={SegundaImagen}/>
                    <div className='beneficios__seccion_dos__circulo'>                    
                    <p>Eres nuestra prioridad</p>
                    </div>
                </div>

            </div>
        </div>

    </>
}

export default Beneficios;