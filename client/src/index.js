import React from 'react'
import { render } from 'react-snapshot'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import './index.scss'

import * as serviceWorker from './serviceWorker'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
