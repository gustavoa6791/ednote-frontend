import React from 'react';
import Header from '../components/Header.jsx'
import SubjectStudentList from '../components/SubjectStudentList.jsx';
import MenuBar from '../components/MenuBar.jsx';
 
import '../assets/styles/App.scss'


const SubjectStudentPage = props => { 
    return (
        <div className="page">
            <Header className="header"/>
            <MenuBar className="menubar"/>
            <SubjectStudentList className="section" />
        </div>
    );
}

export default SubjectStudentPage;