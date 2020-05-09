import React from 'react';
import { connect } from 'react-redux'
import { editSubRequest, setSubjects} from '../redux/actions/index'

const Controls = props => {

  const guardar = () => {
    props.subjects[props.index] = props.info
    props.setSubjects(props.subjects[props.index])
  }

  return (
    <div className="option">
      <div><button className="tag">cancelar</button></div>
      <div><button onClick={guardar} className="tag">guardar -></button></div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    subjects: state.subjects
  }

}
const mapDispatchToProps = {
  editSubRequest,
  setSubjects
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
