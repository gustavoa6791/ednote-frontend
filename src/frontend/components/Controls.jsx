import React from 'react';
import { connect } from 'react-redux'
import { editSubRequest, setSubjectsRequest } from '../redux/actions/index'

const Controls = props => {

  const guardar=()=>{


    props.subjects[props.index].notes = props.info 
  
   props.setSubjectsRequest(props.subjects)
 
   

  }

    return (
        <div className="option">
          <div><button className="tag">cancelar</button></div>
          <div><button onClick={guardar} className="tag">guardar -></button></div>
          <p>{props.index}</p>
          <p></p>
        </div>
    );
}

const mapStateToProps = state => {
  return{
    subjects : state.subjects
  }
  
}
const mapDispatchToProps = {
  editSubRequest,
  setSubjectsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
