import React, { useState } from 'react';
import './index.scss';
import ReCAPTCHA from "react-google-recaptcha";



const contacto = ()=>{    
    
    const onChange =(value)=>{
        console.log('Captcha value', value)
    }
    const recaptchaRef = React.createRef();
    return <>
        <div id='formulario'>            
            <form onSubmit={()=>{recaptchaRef.current.excute();}}>
                <h1>Dejanos tu consulta</h1>
                <p>Dejanos tu consulta </p>
                <div className='formulario__name'>
                <input placeholder='Nombre y Apellido'  type='text' required></input>
                </div>
                <div className='formulario__empresa'>
                <input placeholder='Empresa'className='mr-4' type='text' required></input>
                <input placeholder='Sitio Web' type='text'></input>
                </div>
                <div className='formulario__datos'>
                <input placeholder='Telefono' className='mr-4' type='number' required></input>
                <input placeholder='Email' type='email'></input>
                </div>
                <textarea placeholder='Mensaje' className='formulario__mensaje' required></textarea>
                <button type='submit' className='mb-3'>Enviar</button>
                <ReCAPTCHA className='mb-3' sitekey='6LfEvW0aAAAAAH6o4Wnq2xeG9nOYmM5SdCZDAaB3'
                onChange={onChange}
                ref={recaptchaRef}/>
            </form>
        </div>
        
    
    </>
}

export default contacto