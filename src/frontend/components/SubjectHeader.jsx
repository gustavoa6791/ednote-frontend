
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../assets/styles/subjectHeader.scss'

const SubjectHeader = props => {

  var columnas = {
    
    talleres: ["taller1", "taller2"],
    quizes: ["quizes", "quiz1"],
    parciales: ["parcial1", "parcial2"],
  }
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
      <div>

      </div>
      <table className="table table-sm table-bordered table-header">
        <thead >
          <tr >
            {/* <th scope="col" rowSpan="2">Codigo</th>
            <th scope="col" rowSpan="2" width="300px" >Nombre</th> */}{
              arrayKeys.map((item, index) => {
                return <th key={index}  scope="col" colSpan={arrayValues[index].length} >{item}</th>
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


export default SubjectHeader;

