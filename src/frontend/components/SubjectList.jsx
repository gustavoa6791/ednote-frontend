
import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSubjects, editSubRequest } from '../redux/actions/index'
import Subject from './Subject';

import '../assets/styles/subject.scss'


const SubjectList = props => {

  const { subjects } = props

  const valores = Object.values(subjects);

  const handle = (e) => {
    props.editSubRequest(e);
  }

  return (


    <section className="subjectlist">
      <div className="subjectlist-container">
        {valores.map((item, index) =>
          
            <Subject key={item.id} index={index} handleClick={(e) => { handle(e) }} {...item} />
          
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



export default connect(mapStateToProps, mapDispatchToProps)(SubjectList)

