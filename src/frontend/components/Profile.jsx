import React, { useState } from 'react';
import { connect } from 'react-redux'
import { changePassword } from '../redux/actions/index'
import { withRouter } from 'react-router-dom'
import logo from '../assets/static/note.svg'

import '../assets/styles/profile.scss'

const Profile = ({ user }) => {

   

    const [values, setValues] = useState({
        editable:true
    })

    const handleInput = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
           // event.preventDefault()

            //props.changePassword(values)

    }
    

 
    const { name, email, rol } = user

    return (
        <>
            <section className="Profile">
                <div className="container-change">
                    <div className="usuario">
                        <img src={logo} className="img-profile" />
                        <h3 className="name-profile">usuario</h3>
                    </div>
                    <div>
                        <form className="form-profile">
                            <label className="lab-profile">Nombre</label>
                            <input className="inp-profile" placeholder={name}/>

                            <label className="lab-profile">Correo electronico</label>
                            <input className="inp-profile" placeholder={email} />

                            <label className="lab-profile">Roles</label>
                            <input className="inp-profile" placeholder={rol} />

                            
                            <label >Desea Cambiar la contraseña</label>
                            <div>
                            <input type="radio" id="si" name="pass" value="si" />
                            <label htmlFor="male">Si</label>
                            <input type="radio" id="no" name="pass" value="no" />
                            <label htmlFor="no">No</label>

                            </div>
                            

                            <label className="lab-profile">Contraseña</label>
                            <input className="inp-profile"/>
                            <label className="lab-profile">Repita la Contraseña</label>
                            <input className="inp-profile"/>

                            <button type="button" onClick={handleSubmit}>Editar Usario</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
