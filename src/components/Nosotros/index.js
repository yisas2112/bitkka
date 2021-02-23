import React from 'react'
import './index.scss'
import Imagen from '../../images/nosotros.svg'
const Nosotros = () =>{
    return <>
        <div id='nosotros' className='container'>
            <div className='nosotros__texto__container'>
                <h1>Nuestro Grupo tiene 10 años en el mercado operando su conjunto de empresas
                vinculadas al desarrollo de tecnologías orientadas a dar soluciones de pagos a nuestros
                clientes.
                </h1>
                <p><strong>Nuestra misión es innovar</strong> de manera permanente adaptándonos a las nuevas
                tecnologías de comercio online mundial y estar a la vanguardia para ofrecer a nuestros
                clientes herramientas que permita la expansión de vuestras compañías.
                </p>
                <p><strong>Nuestra visión es que las criptomonedas son el futuro</strong> del comercio mundial en
                términos de transacciones económicas y han llegado para quedarse.</p>
                <p><strong>Tenemos el desafío y el deber de continuar desarrollando tecnologías</strong> para estar a la altura de los acontecimientos venideros.</p>
                <p>Cordialmente,</p>
                <strong>Grupo Bitkkah UO</strong>
                <p>Bitkkapay pertenece al GRUPO BITKKAH OÜ, compañía constituida en Estonia
                REGISTRY CODE: 14929610 -
                FINANCIAL LICENCE: FVT000049 
                CATEGORY: FINANCIAL SERVICES - VIRTUAL CURRENCIES:</p>                
            </div>
            <div className='nosotros__image'>
            <img src={Imagen}/>
            </div>
        </div>
    
    </>
}


export default Nosotros