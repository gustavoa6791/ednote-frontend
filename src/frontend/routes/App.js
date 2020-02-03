import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../containers/LoginPage.jsx'
import NotFound from '../containers/NotFound.jsx'
import Estudiante from '../containers/EstudiantePage.jsx'


const App = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/estudiante" component={Estudiante} />
            <Route component={NotFound}/>
        </Switch>

    </BrowserRouter>


)

export default App;

