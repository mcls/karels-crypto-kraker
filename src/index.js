import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import words from './words'

console.log("src/index.js");

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Karels Crypto Kraker</h1>

        <form>
          <label htmlFor="pattern">Pattern</label>
          <input name="pattern" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

console.log("DONE: src/index.js");
