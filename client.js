import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import configureStore from './components/redux/store'
import { Provider } from 'react-redux'

let initialState = {
    
    answer :['','','',''],
    dob : '',
    email :''
}

let store =configureStore(initialState)


require("./public/css/custom.scss");

render( <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('react-container')
    )
    