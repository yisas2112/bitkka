import React from 'react'
import './index.scss'
import Imagen from '../../images/tarifasimage.svg'
import ImagenFondo from '../../images/tarigasimagefondo.svg'

const Tarifas = ()=>{
    return<>
        <div id='tarifas'>                    
            <div className='tarifas__table__image'>
                <div className='tarifas__h1'>
                <h1>Tarifas</h1>
                </div>
                <div className='tarifas__table__image__container'>
                    <table className='tarifas__table'>
                        <tr>
                        <th colspan="2"><strong>Tarifas Bitkkahpay</strong></th>                                
                        </tr>

                        <tr>            
                        <td>Compra por botones de pago</td>
                        <td>4.5%</td>
                        </tr>

                        <tr>            
                        <td>Donaciones</td>
                        <td>4.5%</td>
                        </tr>

                        <tr>            
                        <td>Retiros en BTC</td>
                        <td>2.5%</td>
                        </tr>

                        <tr>            
                        <td>Conversión de BTC a USD/ EUR</td>
                        <td>1%</td>
                        </tr>

                        <tr>            
                        <td>Conversión de USD/ EUR a BTC</td>
                        <td>1%</td>
                        </tr>
                    </table>
                    <div className='tarifas__imagen__container'>
                        <img className='tarifas__imagen' src={Imagen}/>
                        <img className='tarifas__imagen__fondo' src={ImagenFondo}/>
                    </div>                    
                </div>
                <div className='tarifas__texto__buton__container'>
                    <p>Consultenos por Tarifas especiales para empresas con redes importantes de clientes y acuerdos comerciales donde dichas empresas pueden recibir un beneficio económico por cada transacción.                        
                    </p>
                    <button>Quiero este beneficio</button>
                </div>
            </div>
        </div>

    </>
}


export default Tarifas