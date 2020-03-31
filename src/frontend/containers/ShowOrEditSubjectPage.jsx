import React from 'react';
import Header from '../components/Header.jsx'
import MenuBar from '../components/MenuBar.jsx';
import EditSubject from '../components/EditSubject.jsx';
import ShowSubject from '../components/ShowSubject.jsx';
 
import '../assets/styles/App.scss'



const ShowOrEditSubjectPage = props => {
    
    return (
        <div className="page">
            <Header className="header"/>
            <MenuBar className="menubar"/>
            {
            props.match.params.option=="show"?
            <ShowSubject className="section" subject={props.match.params.subject}/>
            :
            <EditSubject className="section" subject={props.match.params.subject}/>
            }
            
        </div>
    );
}

export default ShowOrEditSubjectPage;