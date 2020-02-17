import React from 'react';
import Header from '../components/Header.jsx'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';


const HomePage = ({user}) => {
    return (
        <div>
            <Header/>
            <h1>Bienvenido {user.name} </h1>
            <h3>tu rol es {user.rol}</h3>
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
