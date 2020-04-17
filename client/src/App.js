import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import TopStories from './components/TopStories';
import RecentStories from './components/RecentStories';
import Comments from './components/Comments';

const App = () => {
  return (
    <Router>
    <div className="App">
    <Navbar/>
      <Switch>
      <Route exact path='/' component={RecentStories} />
      <Route exact path='/top' component={TopStories} />
      <Route exact path='/comments/:title/:id' component={Comments} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
