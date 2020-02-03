import React from 'react';
import Header from '../components/Header.jsx'
import { Link } from 'react-router-dom';


const Estudiante = () => {
    return (
        <div>
            <Header/>
            <h1>pagina de estudiante </h1>
            <h2>regresa a <Link to = '/'>Home</Link></h2>
        </div>
    );
}

export default Estudiante;