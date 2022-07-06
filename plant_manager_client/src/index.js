import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './components/App'
import { rootReducer } from './reducers/rootReducer'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={store}>
        <Router >
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)