
import React from 'react';
import { connect } from 'react-redux'
import Subject from './Subject';

import '../assets/styles/subject.scss'


const SubjectList = ({ subjects }) => {

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
  }
}



export default connect(mapStateToProps, null)(SubjectList)

