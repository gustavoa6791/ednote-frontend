import React from 'react';
import Header from '../components/Header.jsx'
import SubjectList from '../components/SubjectList.jsx';
import MenuBar from '../components/MenuBar.jsx';
 
import '../assets/styles/App.scss'


const SubjectPage = props => { 
    return (
        <div className="page">
            <Header className="header"/>
            <MenuBar className="menubar"/>
            <SubjectList className="section" title={props.match.params.option}/>
        </div>
    );
}

export default SubjectPage;