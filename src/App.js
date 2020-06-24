import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './components/Search';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/watchlist" component={Watchlist} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
