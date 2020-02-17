import React from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import '../assets/styles/Header.scss'
import logo from '../assets/static/note.svg'
import { logoutRequest } from '../redux/actions/index'


const Header = ({ user }) => {

    const handleLogout = () => {

        document.cookie = `email=`
        document.cookie = `name=`
        document.cookie = `id=`
        document.cookie = `rol=`
        document.cookie = 'token=';
        props.logoutRequest({})
        window.location.href = '/'

    }



    return (
        <header className="header">

            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo" className="logo-imagen" />
                </Link>
                <h1 className="logo-nombre">EDnote</h1>
            </div>


            <div className="menu">
                <div className="menu-profile">
                    <img src={logo} alt="logo" className="profile-imagen" />
                    <p className="profile-name" >{user.name ? user.name : ""}</p>
                </div>

                <div className="menu-options">
                    <ul>
                        <li><a href="/">Cuenta</a></li>
                        <li><a href="/" onClick={handleLogout}>Cerrar Sesión</a></li>
                    </ul>
                </div>
            </div>
        </header>
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


export default connect(mapStateToProps, mapDispatchToProps)(Header)
