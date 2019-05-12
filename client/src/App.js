import React from 'react'
import Form from './components/Form'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App has-text-centered">
        <div className="header">
          <h1 className="title is-size-1">Snapshot</h1>
        </div>
        <Form/>
        <div className="footer">
          Footer goes here
        </div>
      </div>
    )
  }
}

export default App;

