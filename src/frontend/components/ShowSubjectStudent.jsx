import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../assets/styles/showSubject.scss'

class ShowSubjectStudent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      info: props.editSubject,
      index: props.subject
    }
  }

  render() {

    const showSubject = this.state.info

    var columnas = showSubject.notes

    const arrayKeys = Object.keys(columnas)
    const arrayValues = Object.values(columnas)

    var alumnos = showSubject.notesnumber

    var porcHeader = showSubject.notesPheader
    var porcItem = showSubject.notesPitem

    var showalumno = ""

    for (let i = 0; i < alumnos.length; i++) {
      if (alumnos[i] != null) {
        showalumno = alumnos[i]
      }
    }

    const notas = showalumno.notes
    const header = showSubject.notesPheader
    const item = showSubject.notesPitem

    const notasv = Object.values(notas)
    const itemv = Object.values(item)

    var promedio = 0.0

    notasv.map((item, index) => {
      item.map((item2, index2) => {
        if (item2 != "") {
          promedio += parseFloat(item2) * (parseFloat(itemv[index][index2]) / 100) * (parseFloat(header[index]) / 100)
        }
      })
    })

    showalumno.average = promedio.toFixed(2)

    const values = Object.values(showalumno.notes)
    const keys = Object.keys(showalumno.notes)

    return (


      <div className="subjectHeader">
        <div className="subjectHeader-title">
          <h1>{showSubject.name}</h1>
          <h5>Codigo de asignatura: {showSubject.code}</h5>
          <h5>Grupo: {showSubject.group}</h5>
        </div>

        <table className="table table-sm table-bordered table-header">
          <thead >
            <tr >
              <th scope="col" rowSpan="2">Codigo</th>
              <th scope="col" rowSpan="2" width="300px" >Nombre</th>
              {
                arrayKeys.map((item, index) => {
                  if (arrayValues[index].length != 0) {
                    return <th key={index} scope="col" colSpan={arrayValues[index].length} >{item} &nbsp;{porcHeader[index]}%</th>
                  } else {
                    return ""
                  }
                })
              }
              <th scope="col" rowSpan="2">Promedio</th>
            </tr>
            <tr>{
              arrayValues.map((item, index) => {
                return (
                  item.map((subitem, subindex) => {
                    return <th key={subindex} scope="col"><span className="por">{subitem}</span>  {porcItem[arrayKeys[index]][subindex]}%</th>
                  })
                )
              })
            }</tr>

          </thead>
          <tbody>
            <tr >
              <td scope="col">{showalumno.code}</td>
              <td scope="col">{showalumno.name}</td>
              {
                values.map((subitem, subindex) => {
                  return (
                    subitem.map((subsubitem, subsubindex) => {

                      return <td scope="col"><input className="input-notes" value={subsubitem} type="number" disabled /></td>
                    })
                  )
                })
              }
              <td scope="col">{showalumno.average}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    editSubject: state.editSubject,

  }

}

export default connect(mapStateToProps, null)(ShowSubjectStudent)
