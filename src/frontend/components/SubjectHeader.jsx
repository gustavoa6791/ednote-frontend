
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';







const SubjectHeader = props => {

  var columnas = [
    ["parciales", "parcial1", "parcial2", "parcial3"],
    ["talleres", "taller1", "taller2", "taller3"],
    ["quizes", "quiz1", "quiz2",]
  ]


  var alumnos = [
    [ 123,
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
   

      <table className="table table-sm table-bordered">
        <thead>
          <tr>
            <th scope="col" rowSpan="2">Codigo</th>
            <th scope="col" rowSpan="2" width="300px" >Nombre</th>
            {
              columnas.map((item, index) => {
                return <th scope="col" colSpan={item.length - 1}>{item[0]}</th>
              })
            }
          </tr>
          <tr>
            {columnas.map((item) => {
              return (
                item.map((subitem, subindex) => {
                  if (subindex != 0) {
                    return <th scope="col">{subitem}</th>
                  }
                })
              )
            })}

          </tr>
        </thead>



        <tbody>


          {alumnos.map((item) => {
            return (<tr>
              { item.map((subitem, subindex) => {
                
                  return <td scope="col" contentEditable="true">{subitem}</td>
                
              })}
            </tr>
             
            )
          })}



        </tbody>
      </table>


    </div>
  )
}


export default SubjectHeader;

