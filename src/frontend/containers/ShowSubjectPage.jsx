import React from 'react';
import Header from '../components/Header.jsx'
import MenuBar from '../components/MenuBar.jsx';
import ShowSubjectStudent from '../components/ShowSubjectStudent.jsx';
 
import '../assets/styles/App.scss'



const ShowSubjectPage = props => {
    
    return (
        <div className="page">
            <Header className="header"/>
            <MenuBar className="menubar"/>
            <ShowSubjectStudent className="section" subject={props.match.params.subject}/>
        </div>
    );
}

export default ShowSubjectPage;