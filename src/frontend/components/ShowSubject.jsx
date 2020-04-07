import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../assets/styles/showSubject.scss'
import Controls from './Controls';

class ShowSubject extends Component {

  constructor(props) {
    super(props);

    this.state = {
      info: props.editSubject,
      index: props.subject
    }
  }

  handleChange(e) {
    const showSubject = this.state.info
    var alumnos = showSubject.notesnumber
    var editCell = e.target.name.split(" ")

    if (parseFloat(e.target.value) > 0 && parseFloat(e.target.value) <= 5 || e.target.value==""){
      alumnos[editCell[0]].notes[editCell[1]][editCell[2]] = e.target.value
    } else {
      alumnos[editCell[0]].notes[editCell[1]][editCell[2]] = "0"
    }

    this.setState({
      info: showSubject
    })
  }

  render() {

    const showSubject = this.state.info

    var columnas = showSubject.notes
    const arrayKeys = Object.keys(columnas)
    const arrayValues = Object.values(columnas)

    var alumnos = showSubject.notesnumber

    var porcHeader = showSubject.notesPheader
    var porcItem = showSubject.notesPitem

    for (let i = 0; i < alumnos.length; i++) {

      const editalumno = alumnos[i]

      const notas = editalumno.notes
      const header = showSubject.notesPheader
      const item = showSubject.notesPitem

      const notasv = Object.values(notas)
      const itemv = Object.values(item)

      var promedio = 0.0

      notasv.map((item, index) => {
        item.map((item2, index2) => {
          if(item2!=""){
             promedio += parseFloat(item2) * (parseFloat(itemv[index][index2]) / 100) * (parseFloat(header[index]) / 100)
          }
        })
      })

      alumnos[i].average = promedio.toFixed(2)



    }










    return (
      <div className="subjectHeader">
        <div className="subjectHeader-title">
          <h1>{showSubject.name}</h1>
          <h5>Codigo de asignatura: {showSubject.code}</h5>
          <h5>Grupo: {showSubject.group}</h5>
        </div>
        <div>
          <Controls info={this.state.info} index={this.state.index} />
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
            {
              alumnos.map((item, index) => {
                const values = Object.values(item.notes)
                const keys = Object.keys(item.notes)
                return (
                  <tr key={index}>
                    <td scope="col">{item.code}</td>
                    <td scope="col">{item.name}</td>
                    {
                      values.map((subitem, subindex) => {
                        return (
                          subitem.map((subsubitem, subsubindex) => {

                            return <td  key={subsubindex}scope="col"><input className="input-notes" name={`${index} ${keys[subindex]} ${subsubindex}`} onChange={() => { (this.handleChange(event)) }} width="10px"value={subsubitem} type="number" /></td>
                          })
                        )
                      })
                    }
                    <td scope="col">{item.average}</td>
                  </tr>
                )
              })
            }
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

export default connect(mapStateToProps, null)(ShowSubject)
