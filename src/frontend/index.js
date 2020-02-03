import React from 'react'
import { hydrate } from 'react-dom'

import { Router } from 'react-router'
import { createBrowserHistory } from 'history'

import App from './routes/App'
import './assets/styles/App.scss'

import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './redux/reducers/index'

if (typeof window !== 'undefined') {
    

    let composeEnhacers;
    if (process.env.NODE_ENV === 'production') composeEnhacers = compose;
    else composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    const preloadedState = window.__PRELOADED_STATE__
    const store = createStore(reducer, preloadedState, composeEnhacers(applyMiddleware(thunk)))
    const history = createBrowserHistory()

    console.log(process.env.NODE_ENV);
    

    hydrate(
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>

        , document.getElementById('app'))


}



