import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../assets/styles/header.scss'
import logo from '../assets/static/note.svg'
import profile from '../assets/static/profile.svg'
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

            {user.name ?

                <div className="menu">
                <div className="menu-profile">
                    <img src={profile} alt="logo" className="profile-imagen" />
                    <p className="profile-name" >{ user.name}</p>
                </div>

                <div className="menu-options">
                    <ul>
                        <li><Link to="/Home" >Home</Link></li>
                        <li><Link to="/Profile" >Cuenta</Link></li>
                        <li><a href="/" onClick={handleLogout}>Cerrar Sesión</a></li>
                    </ul>
                </div>
            </div>
            :
            <div className="menuinicial">
                <Link to="/" >Iniciar Sesiòn</Link>
                <Link to="/Remember" >Recordar Contraseña</Link>
            </div>
            }
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
