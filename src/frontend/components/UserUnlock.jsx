import React, { useState } from 'react';
import { connect } from 'react-redux'
import { loginUser } from '../redux/actions/index'
import { withRouter, Link } from 'react-router-dom'

import '../assets/styles/userUnlock.scss'

const UserUnlock = props => {


   const {name, email , rol , chance} = props.user

   const diferencia = ((new Date().toISOString()) - chance[0]) / (1000*60)
   const isLocked = chance[1] >= 3  
    
    


    return (
       
        <div className = 'User'>
            <div>{name}</div>
           <div>{email}</div>
           <div>{rol}</div>
           <div>{ isLocked? "si" : "no"}</div>
           <div>{isLocked ? <button className="des">"Desbloquear"</button>:""}</div>
    
        </div>
    );
}


export default UserUnlock
