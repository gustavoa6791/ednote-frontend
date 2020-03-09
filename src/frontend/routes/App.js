import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../containers/LoginPage.jsx'
import NotFound from '../containers/NotFound.jsx'
import HomePage from '../containers/HomePage.jsx'
import RememberPage from '../containers/RememberPage.jsx'
import ChangePage from '../containers/ChangePage.jsx'
import ProfilePage from '../containers/ProfilePage.jsx'
import UnlockPage from '../containers/UnlockPage.jsx'
import SubjectPage from '../containers/SubjectPage.jsx'


const App = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/Home" component={HomePage} />
            <Route exact path="/Remember" component={RememberPage} />
            <Route exact path="/Change" component={ChangePage} />
            <Route exact path="/Profile" component={ProfilePage} />
            <Route exact path="/Unlock" component={UnlockPage}/>
            <Route exact path="/Subjects" component={SubjectPage}/>
            <Route component={NotFound}/>
        </Switch>

    </BrowserRouter>


)

export default App;

