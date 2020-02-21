import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeProfile } from '../redux/actions/index'
import profile from '../assets/static/profileR.svg'

import '../assets/styles/profile.scss'

const Profile = ( props ) => {

        
        const{name,email,rol} = props.user

    const [values, setValues] = useState({
    })

    const handleInput = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit1 = event => {
        event.preventDefault()

        var b = document.querySelectorAll("input")
        b[0].removeAttribute("disabled", "")
        b[1].removeAttribute("disabled", "")

        var c = document.querySelectorAll("div")
        c[9].setAttribute("class", "Pass-opt")

        var d = document.querySelectorAll("button")

         d[0].setAttribute("class", "btnCA")
         d[1].setAttribute("class", "btnED")
         d[2].setAttribute("class", "btnGA")

    }

    const handleSubmit2 = event => {
        event.preventDefault()

        props.changeProfile(values)

        

    }


    const handleCancel= event => {
        event.preventDefault()

        var b = document.querySelectorAll("input")
        b[0].setAttribute("disabled", "")
        b[1].setAttribute("disabled", "")

        var c = document.querySelectorAll("div")

        if(c[9].className == "Pass-opt"){
            c[9].setAttribute("class", "changePass-opt")
        }
        if(c[11].className == "Pass"){
            c[11].setAttribute("class", "changePass")
        }

        var d = document.querySelectorAll("button")
    
         d[0].setAttribute("class", "btnC")
         d[1].setAttribute("class", "btnE")
         d[2].setAttribute("class", "btnG")

         var e = document.getElementById("no")
         e.checked = true;

    }

    const handleRadio = e =>{
        
        if (e.target.value=="si") {
            var c = document.getElementsByClassName("changePass")

        c[0].setAttribute("class", "Pass")
            
        }else{
            var c = document.getElementsByClassName("Pass")

        c[0].setAttribute("class", "changePass")

            
        }
        
    }


    return (
        <>
            <section className="Profile">
                <div className="container-change">
                    <div className="usuario">
                        <img src={profile} className="img-profile" />
                        <h3 className="name-profile">{`@${name.toUpperCase()}`}</h3>
                    </div>
                    <div>
                        <form className="form-profile">
                            <label name="input" className="lab-profile" >Nombre</label>
                            <input className="inp-profile" name="name" placeholder={name} onChange={handleInput } disabled />

                            <label className="lab-profile">Correo electronico</label>
                            <input className="inp-profile" name="email" placeholder={email}  onChange={handleInput } disabled />

                            <label className="lab-profile">Roles</label>
                            <input className="inp-profile" placeholder={rol} disabled />




                            <div className="changePass-opt">
                           
                                <label >Desea Cambiar la contraseña </label>
                                

                                <div className="changePass-opt-val">
                                    <input type="radio" id="si" name="pass" value="si" onClick={handleRadio}/>
                                    <label htmlFor="male">Si</label>
                                    <input type="radio" id="no" name="pass" value="no" defaultChecked  onClick={handleRadio}/>
                                    <label htmlFor="no">No</label>
                                </div>
                            </div>

                         



                            <div className="changePass">

                                <label className="lab-profile"  >Contraseña</label>
                                <input className="inp-profile" name="password" onChange={handleInput } />
                                <label className="lab-profile">Repita la Contraseña</label>
                                <input className="inp-profile" />


                            </div>
                            <div className="buttons">
                            <button className="btnC" type="button" onClick={handleCancel}>Cancelar</button>
                            <button className="btnE" type="button" onClick={handleSubmit1}>Editar Usario</button>
                            <button className="btnG" type="button" onClick={handleSubmit2}>Guardar Datos</button>
                                
                            </div>

                            
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
    changeProfile,

};


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
