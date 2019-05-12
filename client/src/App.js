import React from 'react'
import Form from './components/Form'

import './App.css'

const repo = 'areebbeigh/snapshot'
const github = 'https://github.com/'

class App extends React.Component {
  render() {
    return (
      <div className="App has-text-centered">
        <div className="header">
          <h1 className="title is-size-1">Snapshot</h1>
        </div>
        <Form/>
        <div className="footer">
          <a className="github-button" href={github + repo} data-icon="octicon-star" data-size="large" data-show-count="true" 
            aria-label={`Star ${repo} on GitHub`}>Star</a> <span style={{padding: '5px'}}></span>
          <a className="github-button" href={github + repo} data-icon="octicon-repo-forked" data-size="large" data-show-count="true" 
            aria-label={`Star ${repo} on GitHub`}>Fork</a>
        </div>
      </div>
    )
  }
}

export default App;

