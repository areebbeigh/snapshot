import React from 'react';
import './App.css';
import test from './test.png'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <div className="container has-text-centered">
          <div className="form">
            <h1 className="title is-size-1">Snapshot</h1>
            <input id="url" placeholder="Post URL goes here..."></input>
          </div>
          <div className="result">
            <img class="animated zoomIn" src={test} alt=""/>
          </div>
          {/* <div className="footer">
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
