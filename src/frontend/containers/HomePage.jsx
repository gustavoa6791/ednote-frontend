import React from 'react';
import Header from '../components/Header.jsx'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import MenuBar from '../components/MenuBar.jsx';

import '../assets/styles/App.scss'


const HomePage = ({ user }) => {
    return (
        <div className="page">
            <Header className="header" />
            <MenuBar className="menu" />

            <main className="section">
                <h1>Bienvenido {user.name} </h1>
                <h3>tu rol es {user.rol}</h3>
            </main>

        </div>
    );
}
const mapStateToProps = state => {
    return {

        user: state.user,
        rol: state.rol

    }
}



export default connect(mapStateToProps, null)(HomePage)
