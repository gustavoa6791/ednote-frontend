import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../containers/LoginPage.jsx'
import NotFound from '../containers/NotFound.jsx'
import EstudiantePage from '../containers/EstudiantePage.jsx'

const serverRoutes = [
    {
        path:'/login',
        component: LoginPage,
        exact: true,
    },
    {
        path:'/estudiante',
        component: EstudiantePage,
        exact: true,
    },
    {
        name: 'notFound',
        component: NotFound,
    }

]

export default serverRoutes