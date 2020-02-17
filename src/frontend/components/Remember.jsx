import React, {useState} from 'react';
import {connect} from 'react-redux'
import {rememberPassword} from '../redux/actions/index'
import {withRouter} from 'react-router-dom'


import '../assets/styles/remenber.scss'


const Remember = props => {

    const [values, setValues]= useState({
        email: ''
    })

    const handleInput = event =>{
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event =>{
      event.preventDefault()

        props.rememberPassword(values , "/Change")
        
    }

    return (
        <>
            <section className="remember">

            <h2>Recordar contraseña</h2>
                <div className="container-rem">
                    <div className="formulario-rem" >
                        <div>
                            <h3>¿No recuerdas tu  contraseña ?</h3>
                            <p>No te preocupes, ingresa tu correo y te enviaremos 
                                las instruciones para que puedas tener acceso nuevamente 
                            </p>
                        </div>
                        <form >
                            <input
                                type="text"
                                name="email"
                                className="input-rem"
                                onChange={handleInput}
                                placeholder="Correo Electronico"
                                required
                            />
                            <button
                                type="submit"
                                className="button-rem"
                                onClick={handleSubmit}
                            >Recordar contraseña
                            </button>
                        </form>
                        
                    </div>
                </div>
            </section>

        </>
    );
}

const mapDispatchToProps={
    rememberPassword
}

export default withRouter(connect(null,mapDispatchToProps)(Remember))
