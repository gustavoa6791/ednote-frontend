import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editSubRequest } from '../redux/actions/index'
import mas from '../assets/static/plus.png'
import menos from '../assets/static/minus.png'
import Controls from './Controls';


class EditSubject extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      info :  props.toEdit.notes,
      index : props.indexToEdit

    }
      
  }


  menosbtn(params) {
    const columnas = this.state.info
    columnas[`${params}`].pop(`new ${params}`)
    editSubRequest(columnas, this.state.index);
    this.setState({
      info: columnas
    })
    console.log(this.state.info);
  }
  masbtn(params) {
    const columnas = this.state.info
    columnas[`${params}`].push(`new ${params}`)
   editSubRequest(columnas, this.state.index);
   this.setState({
    info: columnas
  })
    console.log(this.state.info)
  }
  agregarbtn(params) {

     const columnas = this.state.info

     columnas[`${params}`] = [`${params}`]

  // editSubRequest(columnas, this.state.index);

   this.setState({
    info: columnas
  })
  document.getElementById('agregar'). value= ""
    console.log(this.state.info);
 }

 guardar () {
  onClickSave(this.state.info, this.state.index)
}




  

  render() {

    const arrayKeys = Object.keys(this.state.info)
    const arrayValues = Object.values(this.state.info)

    var alumnos = [
      [123,
        "jose perez",
        4.0,
        2.5,
        2.5,
        3.5,
        4.5,
        5,
        3.5,
        4.5,
      ],
      [
        293,
        "juan gomez",
        4.0,
        2.5,
        2.5,
        3.5,
        4.5,
        5,
        3.5,
        4.5,

      ],
      [
        334,
        "pedro ruiz",
        4.0,
        2.5,
        2.5,
        3.5,
        4.5,
        5,
        3.5,
        4.5,

      ],
      [
        445,
        "maria uribe",
        4.0,
        2.5,
        2.5,
        3.5,
        4.5,
        5,
        3.5,
        4.5,

      ],
    ]

   
    return (
  

     <div className="subjectHeader">
        <div className="subjectHeader-title">
          <h1><span className="tag">EDITAR</span> {this.props.editSubject[this.props.subject].name}</h1>
          <h5>Codigo de asignatura: {this.props.editSubject[this.props.subject].code}</h5>
          <h5>Grupo: {this.props.editSubject[this.props.subject].group}</h5>
        </div>
        <div>
          <table className="table table-sm table-bordered table-header">
            <thead >
              <tr >{
                arrayKeys.map((item, index) => {

                  if (arrayValues[index].length != 0 ){
                    return <th key={index} scope="col" colSpan={arrayValues[index].length} >{item}</th>
                  }else{
                    return ""
                  }
                  
                  
                
                })
              }</tr>
              <tr>{
                arrayValues.map((item, index) => {
                  return (
                    item.map((subitem, subindex) => {
                      return <th key={subindex} scope="col">{subitem}</th>
                    })
                  )
                })
              }</tr>
            </thead>
          </table>
        </div>
        <Controls info ={this.state.info} index={this.state.index} />
        <div >
          <table className="edit-box">
            <tbody>{
              arrayKeys.map((item, index) => {
                return <tr key={index}>
                  <th className="row-edit-box">{item}</th>
                  <th className="row-edit-box"><span className="tag2" > {arrayValues[index].length}  </span></th>
                  <th className="row-edit-box"><img src={menos} alt="" onClick={() => { this.menosbtn(item) }} />{"   "}<img src={mas} alt="" onClick={() => { this.masbtn(item) }} /></th>

                </tr>
              })
            }<tr>
                <th className="row-edit-box">Otros: </th>
                <th className="row-edit-box"><input id="agregar" placeholder="Nombre" type="text" /></th>
                <th ><button className="tag" 
                onClick={() => { 
                  const params = document.getElementById('agregar'). value
                  this.agregarbtn(params) 
                  }}>Agregar</button></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
    );
  }
}

const mapStateToProps = state => {
  return {
    editSubject: state.subjects,
    toEdit: state.editSubject,
    indexToEdit: state.indexEditSubjects
  }
}

function mapDispatchToProps(dispatch) {
  return {
      onClickSave: (subject,index) => {
         dispatch(editSubRequest (subject,index));
      },
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(EditSubject)
