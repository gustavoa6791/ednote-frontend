import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../assets/styles/header.scss'
import arrow from '../assets/static/arrow.svg'
import profile from '../assets/static/profile.svg'
import { logoutRequest } from '../redux/actions/index'

import '../assets/styles/menu.scss'


const MenuBAr = ({ user }) => {

   const roles = user.rol.split(",")

   console.log();
   
    

    return (
        <aside className = "menuBar">
            <div className="conteiner-menu">
            <div className="conteiner-rol">
                <Link to="/Home">
                <div className="header-menu">Home</div>
                </Link>
                    
                   
                </div >
                {(roles.indexOf("estudiante")==(-1)?""
                :
                <div className="conteiner-rol">
                    <div className="header-menu">Estudiante</div>
                    <div className="option-menu">Ver materias</div>
                    <div className="option-menu">Ver calendario</div>
                </div >
                )}
                {(roles.indexOf("profesor")==(-1)?""
                :
                <div className="conteiner-rol"> 
                    <div className="header-menu">Profesor</div>
                    <div className="option-menu">ver materias</div>
                    <div className="option-menu">Ver calendario</div>
                </div>
              )}
              {(roles.indexOf("admin")==(-1)?""
                :

                <div className="conteiner-rol">
                    <div className="header-menu">Admin</div>
                    <Link to="/Unlock">
                    <div className="option-menu">Desbloquear usuario</div>
                    </Link>
                    
                    <div className="option-menu">Crear materia</div>
                    <div className="option-menu">Crear Usuaros</div>
                </div>
                )}
            </div>
            <div className ="hide-menu"> <img src={arrow} alt="logo" className="arrow" /></div>

        </aside>
        
    );
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {
    logoutRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(MenuBAr)
