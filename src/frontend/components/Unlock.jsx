import React, { useState } from 'react';
import { connect, useStore } from 'react-redux'
import { searchUser } from '../redux/actions/index'
import { withRouter } from 'react-router-dom'
import UserUnlock from './UserUnlock'
import logo from '../assets/static/note.svg'

import '../assets/styles/unlock.scss'

const Unlock = (props) => {

    const valores = Object.values(props.users)
    const dibujarCeldas = valores.map((value, index) => {

        return (
            <UserUnlock key={index} user={value} />
        )
    })

    const [value, setValue] = useState({

    })

    const handleInput = event => {
        props.searchUser(value)
        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.searchUser({ buscar: "@" })
    }




    return (
        <>
            <section className="unlock">
                <h2>Desbloquear usuario</h2>
                <div className="container-unlock">
                    <form>

                        <input autoComplete="off" name="buscar" onChange={handleInput} className="inp-unlock" placeholder="Buscar usuario" />
                        <button type="button" onClick={handleSubmit}>Buscar todos</button>

                    </form>
                    <div className="result">
                        <div className='User-header'>
                            <div>Nombre</div>
                            <div>Email</div>
                            <div>Roles</div>
                            <div>¿Bloqueado? </div>
                            <div>Desbloquear</div>
                        </div>

                        {dibujarCeldas}

                    </div>
                </div>

            </section>
        </>
    );
}

const mapStateToProps = state => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = {

    searchUser,

};


export default connect(mapStateToProps, mapDispatchToProps)(Unlock)
