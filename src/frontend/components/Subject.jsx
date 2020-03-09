
import React from 'react';
import fondo from '../assets/static/subject.jpg'


const Subject = ({ name, code, group }) => {

    return (
    <div className="subject">
        <img className="subject-img" src={fondo} alt={name} />
        <div className="subject-details">
            <p className="subject-details-title">{name}</p>
            <p className="subject-details-subtitle">{`${code} ${group}`}</p>
        </div>
    </div>
    )
}


export default Subject;

