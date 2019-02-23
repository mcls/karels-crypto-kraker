import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import WordSearch from './components/WordSearch.js'
import queryString from 'query-string'
import './style.css'
import words from './words'

class App extends Component {
  handleSearchChange(newSearch) {
    const qs = queryString.stringify({q: newSearch});
    var newRelativePathQuery = window.location.pathname + '?' + qs;
    history.pushState(null, '', newRelativePathQuery);
  }

  render(data) {
    const params = queryString.parse(this.props.location.search);

    return (
      <div className="app">
        <h1>Karels Crypto Kraker</h1>
        <WordSearch initialValue={params.q} words={words} onSearchChange={this.handleSearchChange}/>
      </div>
    )
  }
}

const AppRouter = () => (
  <BrowserRouter>
    <Route path="/" component={App}/>
  </BrowserRouter>
)


ReactDOM.render(<AppRouter />, document.getElementById('root'));
