import React from 'react';
import Header from '../components/Header.jsx'
import Unlock from '../components/Unlock.jsx'
import MenuBar from '../components/MenuBar.jsx';

import '../assets/styles/App.scss'

const UnlockPage = () => {
    return (
        <div className="unlockpage">
            <Header className="header"/>
            <MenuBar className="menubar"/>
            <Unlock className="unlock"/>
        </div>
    );
}

export default UnlockPage;