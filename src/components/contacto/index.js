import React from 'react'
import './index.scss'

const contacto = ()=>{

    const handleSubmit =(event)=>{
        event.preventDefacult()
    }
    return <>
        <div id='formulario'>            
            <form onSubmit={handleSubmit}>
                <h1>Dejanos tu consulta</h1>
                <p>Dejanos tu consulta </p>
                <div className='formulario__name'>
                <input placeholder='Nombre y Apellido' type='text'></input>
                </div>
                <div className='formulario__empresa'>
                <input placeholder='Empresa'className='mr-4' type='text'></input>
                <input placeholder='Sitio Web' type='text'></input>
                </div>
                <div className='formulario__datos'>
                <input placeholder='Telefono' className='mr-4' type='number'></input>
                <input placeholder='Email' type='email'></input>
                </div>
                <textarea placeholder='Mensaje' className='formulario__mensaje'></textarea>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    
    </>
}

export default contacto