import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import words from './words'
import WordMatcher from './WordMatcher'
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
    return new WordMatcher(words).findMatching(pattern);
  }

  render() {
    let rows = this.state.candidates.slice(0, 100).map(x => {
      return <article class="results-word">{x}</article>;
    });
    return (
      <div className="app">
        <h1>Karels Crypto Kraker</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            autofocus="true"
            className="input-pattern"
            name="pattern"
            placeholder="kr.k.r"
            value={this.state.value}
            onChange={this.handleChange} />
        </form>

        <p><em>{this.state.value.length} char(s). {this.state.candidates.length} result(s). Showing the first {rows.length}.</em></p>
        <div class="results-container">{rows} </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
