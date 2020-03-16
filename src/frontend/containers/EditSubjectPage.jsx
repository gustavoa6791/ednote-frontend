import React from 'react';
import Header from '../components/Header.jsx'
import MenuBar from '../components/MenuBar.jsx';
import EditSubject from '../components/EditSubject.jsx';
 
import '../assets/styles/App.scss'



const EditSubjectPage = () => {
    return (
        <div className="page">
            <Header className="header"/>
            <MenuBar className="menubar"/>
            <EditSubject className="section"/>
        </div>
    );
}

export default EditSubjectPage;