import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getSubjects} from '../redux/actions/index'

import arrow from '../assets/static/arrow.svg'
import '../assets/styles/menu.scss'
 

const MenuBAr = (props) => {

    const roles = props.user.rol.split(",")

   function subjects() {

        props.getSubjects(props.user.id)
       
   }



    return (
        <aside className="menuBar">
            <div className="conteiner-menu">
                <div className="conteiner-rol">
                    <Link to="/Home">
                        <div className="header-menu">Home</div>
                    </Link>


                </div >
                {(roles.indexOf("estudiante") == (-1) ? ""
                    :
                    <div className="conteiner-rol">
                        <div className="header-menu">Estudiante</div>
                        <div className="option-menu">Ver materias</div>
                        <div className="option-menu">Ver calendario</div>
                    </div >
                )}
                {(roles.indexOf("profesor") == (-1) ? ""
                    :
                    <div className="conteiner-rol">
                        <div className="header-menu">Profesor</div>
                        <Link to = "/Subjects">
                            <div className="option-menu" onClick={subjects}>Ver materias</div>
                        </Link>
                        <Link to = "/Subjects">
                            <div className="option-menu">Modificar plantillas</div>
                        </Link>


                    </div>
                )}
                {(roles.indexOf("admin") == (-1) ? ""
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
            <div className="hide-menu"> <img src={arrow} alt="logo" className="arrow" /></div>

        </aside>

    );
}

const mapStateToProps = state => {
    return {
      subjects: state.subjects,
      user: state.user
    }
  }
  
  const mapDispatchToProps = {
   getSubjects,
  };
  
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(MenuBAr)
