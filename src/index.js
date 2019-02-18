import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import words from './words'
import WordMatcher from './WordMatcher'
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', didNonEmptySearch: false, candidates: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    const wordMatcher = new WordMatcher(words);
    this.updateWordCandidates = AwesomeDebouncePromise((pattern) => {
      let candidates = [];
      if (pattern.length >= 1) {
        candidates = wordMatcher.findMatching(pattern);
      }
      this.setState({candidates: candidates, didNonEmptySearch: (pattern != '')});
    }, 150);
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  handleChange(event) {
    const pattern = event.target.value;
    this.setState({value: pattern});
    this.updateWordCandidates(pattern);
  }

  render() {
    return (
      <div className="app">
        <h1>Karels Crypto Kraker</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus={true}
            className="input-pattern"
            maxLength={100}
            name="pattern"
            onChange={this.handleChange}
            placeholder="kr.k.r"
            spellCheck="false"
            value={this.state.value} />
        </form>

        <p><em>{this.state.value.length} karakter(s)</em></p>

        <WordCandidates candidates={this.state.candidates} didNonEmptySearch={this.state.didNonEmptySearch} />
      </div>
    )
  }
}

class WordCandidates extends Component {
  render() {
    const candidates = this.props.candidates;
    const didNonEmptySearch = this.props.didNonEmptySearch;

    let rows = candidates.slice(0, 100).map(x => {
      return <article className="results-word" key={x}>{x}</article>;
    });

    let results = '';
    if (candidates.length > 0) {
      results = rows;
    } else if (didNonEmptySearch) {
      results = <p><em>Niets gevonden...</em></p>;
    }

    return (
      <div>
        <ResultSummary shown={rows.length} total={candidates.length} />
        <div className="results-container">{results}</div>
      </div>
    )
  }
}

class ResultSummary extends Component {
  render() {
    const total = this.props.total;
    const shown = this.props.shown;

    if ( shown > 0 ) {
      if ( shown < total ) {
        return (
          <p><em>{total} mogelijkheden, waarvan {shown} weergegeven</em></p>
        );
      } else if ( shown == 1 ) {
        return (
          <p><em>1 mogelijkheid</em></p>
        );
      } else {
        return <p><em>{total} mogelijkheden</em></p>;
      }
    }
    return null;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
