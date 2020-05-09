import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getSubjects, getStudentSubjects} from '../redux/actions/index'

import arrow from '../assets/static/arrow.svg'
import '../assets/styles/menu.scss'
 

const MenuBAr = (props) => {

    const roles = props.user.rol.split(",")

   function subjects() {
   
        props.getSubjects(props.user.id)
    
       
   }
    function subjectsStudent(){
      
            props.getStudentSubjects(props.user.id)
   
    }
   const show = 1
   const edit = 2



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
                        <Link to= "/StudentShow">
                             <div className="option-menu" onClick={subjectsStudent}>Ver materias</div>
                        </Link>
                       
                        <div className="option-menu">Ver calendario</div>
                    </div >
                )}
                {(roles.indexOf("profesor") == (-1) ? ""
                    :
                    <div className="conteiner-rol">
                        <div className="header-menu">Profesor</div>
                        <Link to = {`/Subjects/show`}  > 
                            <div className="option-menu" onClick={subjects} >Ver materias</div>
                        </Link>
                        <Link to = {`/Subjects/edit`}  >
                            <div className="option-menu" onClick={subjects} >Modificar plantillas</div>
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
   getStudentSubjects,
  };
  
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(MenuBAr)
