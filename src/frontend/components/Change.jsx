import React, { useState } from 'react';
import { connect } from 'react-redux'
import { changePassword } from '../redux/actions/index'
import { withRouter } from 'react-router-dom'

import '../assets/styles/change.scss'



const Change = props => {

    const [values, setValues] = useState({   
    })

    const handleInput = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()

        props.changePassword(values)

    }

    return (
        <>
        <section className="change">
            <div className="container-change">
                <h2>Cambia tu contraseña</h2>
                <div className="formulario-change">
                    <form >
                        <input
                            type="email"
                            name="email"
                            className="input-change"
                            onChange={handleInput}
                            placeholder="Codigo de Usuario"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            className="input-change"
                            onChange={handleInput}
                            placeholder="Nueva Contraseña"
                            required
                        />
                        <input
                            type="password"
                            name="password2"
                            className="input-change"
                            onChange={handleInput}
                            placeholder="Repita la nueva contraseña"
                            required
                        />
                        <input
                            type="text"
                            name="codigo"
                            className="input-change"
                            onChange={handleInput}
                            placeholder="Codigo"
                            required
                        />
                        <button
                            type="submit"
                            className="button-change"
                            onClick={handleSubmit}>
                        Cambiar contraseña
                        </button>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
}

const mapDispatchToProps = {
    changePassword
}

export default withRouter(connect(null, mapDispatchToProps)(Change))
