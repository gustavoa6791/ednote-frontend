import React from 'react';
import { Link } from 'react-router-dom'

import {connect} from 'react-redux'

import '../assets/styles/Header.scss'
import logo from '../assets/static/note.svg'
import{logoutRequest} from '../redux/actions/index'


const Header = ({user}) => {

    const handleLogout=()=>{

        document.cookie = `email=`
        document.cookie = `name=`
        document.cookie = `id=`
        document.cookie = 'token=';
        props.logoutRequest({})
        window.location.href= '/login'

    }
   
    
    
    return (
        <header className="header">

            <Link to='/'>
                <div className="logo">
                    <img src={logo} alt="logo" className="logo-imagen" />
                    <h1 className="logo-nombre">Enote</h1>
                </div>
            </Link>

            <div className="menu">
                <div className="menu-profile">
                    <img src="" alt="" className="menu-perfil-image" />
                     <p>{user.name ?  user.name : "perfil"}</p>
                </div>
                <div className="menu-options">
                    <ul>
                        <li><a href="/">Cuenta</a></li>
                        <li><a href="/login" onClick={handleLogout}>Cerrar Sesión</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = state => {
    return {

        user: state.user

    }
}

const mapDispatchToProps = {
    logoutRequest,
  };


export default connect(mapStateToProps, mapDispatchToProps)(Header)
