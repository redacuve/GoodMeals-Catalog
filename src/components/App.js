import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import IndexRoot from '../containers/IndexRoot';
import SearchMeals from './SearchMeals';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact component={IndexRoot} />
        <Route path="/search/:term" exact component={SearchMeals} />
        <Route path="/area/:term" exact component={SearchMeals} />
        <Route path="/category/:term" exact component={SearchMeals} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
