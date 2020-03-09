import React, { useState } from 'react';
import { connect } from 'react-redux'
import { unlockUser } from '../redux/actions/index'
import { withRouter, Link } from 'react-router-dom'

import '../assets/styles/userUnlock.scss'

const UserUnlock = props => {


   const {name, email , rol , chance} = props.user

   const diferencia = ((new Date().toISOString()) - chance[0]) / (1000*60)
   const isLocked = chance[1] >= 3  
    
   const handleSubmit = event => {
    
    
   
    props.unlockUser(email, "/Unlock")
}


    return (
       
        <div className = 'User'>
            <div>{name}</div>
           <div>{email}</div>
           <div>{rol}</div>
           <div>{ isLocked? "si" : "no"}</div>
           <div>{isLocked ? <button className="des" onClick={handleSubmit}>"Desbloquear"</button>:""}</div>
    
        </div>
    );
}

const mapDispatchToProps = {

    unlockUser,

};


export default connect(null, mapDispatchToProps)(UserUnlock)
