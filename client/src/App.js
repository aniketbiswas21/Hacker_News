import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import TopStories from './components/TopStories';

const App = () => {
  return (
    <Router>
    <div className="App">
    <Navbar/>
      <Switch>
      <Route exact path='/' component={TopStories} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
