import React, { useState } from 'react';
import { connect, useStore } from 'react-redux'
import { searchUser, searchUserAll } from '../redux/actions/index'
import { withRouter } from 'react-router-dom'
import logo from '../assets/static/note.svg'

//mport '../assets/styles/change.scss'

const Unlock = (props, { users }) => {

   

    const [value, setValue] = useState({

    })

    const handleInput = event => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        })

        
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.searchUser(value)
       

    }

 
    const handleSubmitAll = event => {
        event.preventDefault()

       props.searchUserAll()

    }


    return (
        <>
            <section className="Profile">
                <h2>Desbloquear usuario</h2>
                <div className="container-change">
                    <form>

                        <input name="buscar" onChange={handleInput} className="inp-profile" placeholder="Buscar usuario" />
                        <button type="button" onClick={handleSubmit}>Buscar</button>
                        <button type="button" onClick={handleSubmitAll}>Ver todos</button>
                    </form>
                    <div className="result">
                        <ul>
                            {
                            //   users.map((value,index) => {
                            //             return (
                            //                 hola
                            //         // <Celda
                            //         //         key={index}
                            //         //         value={value == 0 ? "" : value}
                            //         //         onChange={this.props.onChange}
                            //         //         index={index}
                            //         //     />
                            //             )
                            //           })
                                  
                                
                                
                            }
                        </ul>
                    </div>
                </div>

            </section>
        </>
    );
}

const mapStateToProps = state => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = {
    searchUserAll,
    searchUser,

};


export default connect(mapStateToProps, mapDispatchToProps)(Unlock)
