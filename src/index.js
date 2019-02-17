import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import words from './words'
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', candidates: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  handleChange(event) {
    const pattern = event.target.value;
    let candidates = [];
    if (pattern.length >= 1) {
      candidates = this.findMatchingWords(pattern);
    }
    this.setState({value: pattern, candidates: candidates});
  }

  findMatchingWords(pattern) {
    return words.filter(word => {
      if ( word.length != pattern.length ) {
        // Different size
        return false;
      }

      for (var x = 0, c=''; c = pattern.charAt(x); x++) {
        if (c == '.') {
          continue;
        }
        if (word.charAt(x) != c) {
          // Different char
          return false;
        }
      }
      return true;
    });
  }

  render() {
    let rows = this.state.candidates.slice(0, 30).map(x => {
      return <p>{x}</p>
    });
    return (
      <div className="app">
        <h1>Karels Crypto Kraker</h1>

        <form onSubmit={this.handleSubmit}>
          <input autofocus="true" name="pattern" value={this.state.value} onChange={this.handleChange} />
        </form>

      <p><em>{this.state.value.length} char(s). {this.state.candidates.length} result(s). Showing the first {rows.length}.</em></p>
        {rows}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

console.log("DONE: src/index.js");
