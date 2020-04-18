import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import TopStories from './components/TopStories';
import RecentStories from './components/RecentStories';
import Comments from './components/Comments';
import NotFound from './components/NotFound';
import Add from './components/Add';
import About from './components/About';

const App = () => {
  return (
    <Router>
    <div className="App">
    <Navbar/>
      <Switch>
      <Route exact path='/' component={RecentStories} />
      <Route exact path='/top' component={TopStories} />
      <Route exact path='/comments/:title/:id' component={Comments} />
      <Route exact path='/add' component={Add} />
      <Route exact path='/about' component={About} />
      <Route component={NotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
