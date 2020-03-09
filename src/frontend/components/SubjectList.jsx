
import React from 'react';
import { connect } from 'react-redux'

import {getSubjects} from '../redux/actions/index'
import Subject from './Subject';

import '../assets/styles/subject.scss'


const SubjectList = props => {

  const { subjects } = props

  const valores = Object.values(subjects);

  return (
   

    <section className="subjectlist">
      <div className="subjectlist-container">
        {valores.map(item =>
          <Subject key={item.id} {...item} />
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
 getSubjects,
};



export default connect(mapStateToProps, mapDispatchToProps)(SubjectList)

