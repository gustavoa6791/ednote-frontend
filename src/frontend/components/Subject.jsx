
import React from 'react';
import fondo from '../assets/static/subject.jpg'
import { Link } from 'react-router-dom'


const Subject = props => {

    const { index, name, code, group } = props

    return (
        <div name={index} onClick={() => { props.handleClick(index) }} className="subject">
            <Link to="/EditSubject">
                <div>
                    <img className="subject-img" src={fondo} alt={name} />
                    <div className="subject-details">
                        <p className="subject-details-title">{name}</p>
                        <p className="subject-details-subtitle">{`${code} ${group}`}</p>
                    </div>

                </div>

            </Link>
        </div>
    )
}


export default Subject;

