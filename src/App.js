import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Users from './users'
import AddUser from './AddUser'
import './App.css'

import store from './store'

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AddUser />
          <Users />
        </div>
      </Provider>
    )
  }
}

export default App
