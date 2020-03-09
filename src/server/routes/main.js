import React, { useReducer } from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import { StaticRouter } from 'react-router'
import { renderRoutes } from 'react-router-config'
import Routes from '../../frontend/routes/serverRoutes'
import reducer from '../../frontend/redux/reducers/index'
import render from '../render/index'



const main = (req, res, next) => {

    try {
        let initialState
        try {
            const { token, email, name, id, rol } = req.cookies
            initialState = {
                user: {
                    id,
                    email,
                    name,
                    rol,
                },
                users: {

                },
                subjects: [
                    {
                        id:"1",
                        name: "calculo 2",
                        code: "101010M",
                        group: 50
                    },
                    {
                        id:"2",
                        name: "introduccion a la tecnologia en sistemas",
                        code: "101015M",
                        group: 50
                    },
                    {
                        id:"3",
                        name: "matematicas discretas",
                        code: "505050M",
                        group: 55
                    },

                ]
            }
        } catch (error) {

        }

        const store = createStore(reducer, initialState)
        const html = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={{}}>
                    {renderRoutes(Routes)}
                </StaticRouter>
            </Provider>
        )

        const preloadedState = store.getState()

        res.send(render(html, preloadedState))

    } catch (error) {
        next(error)
    }

}

export default main