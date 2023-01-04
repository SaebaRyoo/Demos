import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Todo from './features/todo/Todo'
import './index.css'
import { Provider } from 'react-redux';
import store from './stores/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Todo />
    </Provider>
  </React.StrictMode>,
)
