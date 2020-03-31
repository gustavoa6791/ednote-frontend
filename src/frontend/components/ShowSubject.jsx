import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../assets/styles/showSubject.scss'

const ShowSubject = props => {

  var columnas = props.editSubject[props.subject].notes
  const arrayKeys = Object.keys(columnas)
  const arrayValues = Object.values(columnas)

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
        <h1>{props.editSubject[props.subject].name}</h1>
        <h5>Codigo de asignatura: {props.editSubject[props.subject].code}</h5>
        <h5>Grupo: {props.editSubject[props.subject].group}</h5>

      </div>
      <table className="table table-sm table-bordered table-header">
        <thead >
          <tr >
            <th scope="col" rowSpan="2">Codigo</th>
                        <th scope="col" rowSpan="2" width="300px" >Nombre</th>
             { arrayKeys.map((item, index) => {
                return <th key={index} scope="col" colSpan={arrayValues[index].length} >{item}</th>
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
  )


}

const mapStateToProps = state => {
  return {
    editSubject: state.subjects,
  }

}

const mapDispatchToProps = {


};


export default connect(mapStateToProps, null)(ShowSubject)
