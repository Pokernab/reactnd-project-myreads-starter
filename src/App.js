import React from 'react'

import './App.css'
import Search from './containers/SearchBooks';
import MainPage from './containers/MainPage';
import { Route, Switch } from 'react-router-dom';

class BooksApp extends React.Component {

  render() {
    const routes = (
      <Switch>
          <Route path='/search'  exact component={Search} />
          <Route path='/'             component={MainPage} />
      </Switch>
    );
    return (
      <div className="app">
      {routes}
      </div>
    );
  };
};

export default BooksApp
