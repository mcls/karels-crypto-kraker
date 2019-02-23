import React, { Component } from 'react';
import Pluralize from 'react-pluralize'

import WordMatcher from '../WordMatcher'
import LetterBlocks from './LetterBlocks'
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { Link } from 'react-router-dom'

export class WordSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue || '',
      didNonEmptySearch: false,
      candidates: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    const wordMatcher = new WordMatcher(this.props.words || []);
    this.updateWordCandidates = AwesomeDebouncePromise((pattern) => {
      let candidates = [];
      if (pattern.length >= 1) {
        candidates = wordMatcher.findMatching(pattern);
      }
      this.setState({candidates: candidates, didNonEmptySearch: (pattern != '')});
    }, 150);
    if ( props.initialValue ) {
      this.updateWordCandidates(props.initialValue);
    }
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  handleChange(event) {
    // Don't allow whitespace characters. Replace them by wildcards instead
    const pattern = event.target.value.replace(/\s+/g, '.');
    this.setState({value: pattern});
    this.updateWordCandidates(pattern);

    if (this.props.onSearchChange) {
      this.props.onSearchChange(pattern);
    }
  }

  render() {
    return (
      <React.Fragment>
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

        <p><em><Pluralize singular={'karakter'} plural={'karakters'} count={this.state.value.length} /></em></p>
        <LetterBlocks value={this.state.value} />

        <WordCandidates candidates={this.state.candidates} didNonEmptySearch={this.state.didNonEmptySearch} />
      </React.Fragment>
    )
  }
}

class WordCandidates extends Component {
  render() {
    const candidates = this.props.candidates;
    const didNonEmptySearch = this.props.didNonEmptySearch;

    let rows = candidates.slice(0, 100).map(x => {
      return (
        <article className="results-word" key={x}>
        <a href={'https://www.woorden.org/woord/' + x} target="blank" rel="noopener">{x}</a>
        </article>
      );
    });

    let results = '';
    if (candidates.length > 0) {
      results = rows;
    } else if (didNonEmptySearch) {
      results = <p><em>Niets gevonden...</em></p>;
    } else {
      let examples = [
        'kr.k.r',
        'kr...w..rd',
      ];
      examples = examples.map((ex) => {
        return <li key={ex}><a href={'/?q=' + ex}>{ex}</a></li>;
      });
      results = (
        <div>
        <p>Probeer een voorbeeld:</p>
        <ul className="list-examples">{examples}</ul>
        </div>
      );
    }

    return (
      <React.Fragment>
        <ResultSummary shown={rows.length} total={candidates.length} />
        <div className="results-container">{results}</div>
      </React.Fragment>
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
          <p><em>{total} woorden die passen, waarvan {shown} weergegeven:</em></p>
        );
      } else if ( shown == 1 ) {
        return (
          <p><em>1 woord dat past:</em></p>
        );
      } else {
        return <p><em>{total} woorden die passen:</em></p>;
      }
    }
    return null;
  }
}

export default WordSearch;
