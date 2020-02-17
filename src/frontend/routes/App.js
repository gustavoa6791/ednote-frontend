import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../containers/LoginPage.jsx'
import NotFound from '../containers/NotFound.jsx'
import HomePage from '../containers/HomePage.jsx'
import RememberPage from '../containers/RememberPage.jsx'
import ChangePage from '../containers/ChangePage.jsx'


const App = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/Home" component={HomePage} />
            <Route exact path="/Remember" component={RememberPage} />
            <Route exact path="/Change" component={ChangePage} />
            <Route component={NotFound}/>
        </Switch>

    </BrowserRouter>


)

export default App;

