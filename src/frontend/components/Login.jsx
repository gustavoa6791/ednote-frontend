import React, {useState} from 'react';
import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/index'
import {withRouter} from 'react-router-dom'

import '../assets/styles/login.scss'

const Login = props => {

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

        props.loginUser(values, '/estudiante')
        
    }

    return (
        <>
            <section className="login">
                <div className="container">
                    <h2>Inicia Sesión</h2>

                    <div className="formulario" >
                        <form >
                            <input
                                type="text"
                                name="email"
                                className="input"
                                onChange={handleInput}
                                placeholder="Codigo de Usuario"
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                className="input"
                                onChange={handleInput}
                                placeholder="Contraseña"
                                required
                            />
                            <button
                                type="submit"
                                className="button"
                                onClick={handleSubmit}
                            >Iniciar Sesión
                            </button>

                            <div className="recovery">
                                <a href="">Olvide mi Contaseña</a>
                            </div>

                        </form>
                        <div className="social">
                            <img src='' alt="" />
                            <a href="">Inicia Sesión con Correo institicional</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

const mapDispatchToProps={
    loginUser
}

export default withRouter(connect(null,mapDispatchToProps)(Login))
