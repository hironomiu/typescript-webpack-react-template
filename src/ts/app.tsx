import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Hello from './components/Hello'

const app = document.getElementById('app')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Hello />
    </Provider>
  </React.StrictMode>,
  app
)
