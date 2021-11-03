import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetStarted from './components/GetStarted';
import Navigationbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <div className='principal'>
          <Navigationbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/getstarted' component={GetStarted} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
