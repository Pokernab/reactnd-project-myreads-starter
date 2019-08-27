import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './containers/SearchBooks';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Search />
      </div>
    )
  }
}

export default BooksApp
