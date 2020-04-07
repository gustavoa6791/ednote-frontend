import React, { Component } from 'react';
import { connect } from 'react-redux'
import mas from '../assets/static/plus.png'
import menos from '../assets/static/minus.png'
import Controls from './Controls';

class EditSubject extends Component {

  constructor(props) {
    super(props);

    this.state = {
      info: props.toEdit.notes,
      infodata: props.toEdit.notesnumber,
      index: props.indexToEdit,
      porcHeader: props.porcHeader,
      porcItem: props.porcItem,

      edit: props.toEdit
    }
  }

  handleChange(e) {
    var header = this.state.porcHeader
    if (e.target.value > 0 && e.target.value <= 100 ) {
      header[e.target.name] = e.target.value
    } else {
      header[e.target.name] = '0'
    }

    this.setState({
      porcHeader: header,
    })
  }

  handleChange2(e) {
    var items = this.state.porcItem

    if (e.target.value > 0 && e.target.value <= 100 ) {
      items[e.target.id][e.target.name] = e.target.value
    } else {
      items[e.target.id][e.target.name] = '0'
    }
    
    this.setState({
      porcItem: items,
    })
  }

  menosbtn(params) {
    const columnas = this.state.info
    const notas = this.state.infodata
    notas.forEach(element => {
      element.notes[params].pop()
    });
    columnas[`${params}`].pop()
    this.setState({
      info: columnas
    })
  }

  masbtn(params, nro) {
    const columnas = this.state.info
    const notas = this.state.infodata
    const porcI = this.state.porcItem
    notas.forEach(element => {
      element.notes[params].push('0')
    });
    columnas[`${params}`].push(`${params} ${nro}`)
    porcI[`${params}`].push(`0`)
    this.setState({
      info: columnas
    })
  }

  agregarbtn(params) {
    const columnas = this.state.info
    const notas = this.state.infodata
    const porc = this.state.porcHeader
    const porcI = this.state.porcItem
    notas.forEach(element => {
      element.notes[params] = [`0`]
    });
    porc.push('0')
    columnas[`${params}`] = [`${params}`]
    porcI[`${params}`] = [`0`]
    this.setState({
      info: columnas
    })
    document.getElementById('agregar').value = ""
  }


  render() {

    const arrayKeys = Object.keys(this.state.info)
    const arrayValues = Object.values(this.state.info)

    const mensaje1 = 'La suma de los porcentajes debe ser 100% ❌️'
    const mensaje2 = "la suma es igual a 100% ✔️"

    var total = 0
    var total2 = 0

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
                  if (arrayValues[index].length != 0) {
                    return <th key={index} scope="col" colSpan={arrayValues[index].length}  >{item} &nbsp;{this.state.porcHeader[index]}%</th>
                  } else {
                    return ""
                  }
                })
              }</tr>
              <tr>{
                arrayValues.map((item, index) => {
                  return (
                    item.map((subitem, subindex) => {
                      return <th key={subindex} scope="col"> <span className="por">{subitem}</span>  {this.state.porcItem[arrayKeys[index]][subindex]} %</th>
                    })
                  )
                })
              }</tr>
            </thead>
          </table>
        </div>
        <Controls info={this.state.edit} index={this.state.index} />
        <div className="edit-box-div">
          <table className="edit-box">
            <tbody>
              <tr>
                <th>{this.state.porcHeader.map(i => { total += parseFloat(i) })}</th>
                <th ><p className={`alert ${total != 100 ? 'error' : ''}`} >{total != 100 ? mensaje1 : mensaje2}</p></th>
              </tr>
              {
                arrayKeys.map((item, index) => {
                  return <tr className="item" key={index}>
                    <th className="row-edit-box">{item}</th>
                    <th className="row-edit-box"><span className="tag2" > {arrayValues[index].length}  </span> &nbsp;&nbsp; % <input name={index} value={this.state.porcHeader[index]} onChange={() => { (this.handleChange(event)) }} className="porcentaje" type="number" /></th>
                    <th className="row-edit-box"><img src={menos} alt="" onClick={() => { this.menosbtn(item) }} />{"   "}<img src={mas} alt="" onClick={() => { this.masbtn(item, (arrayValues[index].length + 1)) }} /></th>
                    {this.state.porcItem[item].map(i => { total2 += parseFloat(i) })}
                    <th><p className={`alert p ${total2 != 100 ? 'error' : ''}`} > {total2 != 100 ? '❌️' : '✔️'}</p></th>
                    {arrayValues[index].map((subitem, subindex) => {
                      total2 = 0
                      return (<th className="row-edit-box"><p className="por">{`${subitem} % `}</p>  <input className="porcentaje" id={item} name={subindex} value={this.state.porcItem[arrayKeys[index]][subindex]} onChange={() => { (this.handleChange2(event)) }} type="number" /></th>)
                    })}
                  </tr>
                })
              }<tr>

                <th className="row-edit-box">Otros: </th>
                <th className="row-edit-box"><input id="agregar" placeholder="Nombre" type="text" /></th>
                <th ><button className="tag"
                  onClick={() => {
                    const params = document.getElementById('agregar').value
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
    indexToEdit: state.indexEditSubjects,
    porcHeader: state.editSubject.notesPheader,
    porcItem: state.editSubject.notesPitem
  }
}

export default connect(mapStateToProps, null)(EditSubject)

