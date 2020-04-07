
import React from 'react';
import fondo from '../assets/static/subject.jpg'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {modifyRequest }from '../redux/actions/index'

const Subject = props => {

    const { index, name, code, group, option } = props
    var url=""

  
    return (
        <div name={index} onClick={() => { props.handleClick(index) }} className="subject">
            
            <Link to={option=="Student"? url=`/ShowSubjectStudent/${index}`:`/ShowSubject/${option}/${index}`}>
                <div >
                    <img className="subject-img" src={fondo} alt={name} />
                    <div className="subject-details">
                        <p className="subject-details-title">{name}</p>
                        <p className="subject-details-subtitle">{`${code} ${group} `}</p>
                    </div>

                </div>

            </Link>
        </div>
    )
}

const mapDispatchToProps = {
    modifyRequest,
  };
  
  export default connect(null, mapDispatchToProps )(Subject)

