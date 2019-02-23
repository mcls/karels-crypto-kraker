import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WordSearch from './components/WordSearch.js'
import './style.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Karels Crypto Kraker</h1>
        <WordSearch />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
