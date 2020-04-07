
import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSubjects, editSubRequest } from '../redux/actions/index'
import Subject from './Subject';

import '../assets/styles/subject.scss'


const SubjectStudentList = props => {
  
  const { subjects } = props

  const valores = Object.values(subjects);
  
  const handle = (e) => {
    props.editSubRequest(subjects[e], e);
  }



  return (

    <section className="subjectlist">
      <div>
          <h1>Materias Estudiante</h1>
      </div>
       
      
      <div className="subjectlist-container">
      {valores.map((item, index) =>
          <Subject key={item.id} index={index} handleClick={(e) => { handle(e) }} {...item} itemEdit={item} option="Student"/>
        )}
      </div>
 
    </section >
  )
}

const mapStateToProps = state => {
  return {
    subjects: state.subjects,
    user: state.user
  }

}

const mapDispatchToProps = {
  editSubRequest,
};



export default connect(mapStateToProps, mapDispatchToProps)(SubjectStudentList)

