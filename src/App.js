import './App.css';
import React, { } from 'react'

import Portfolio from './Portfolio.js'
import Contact from './Contact.js'
import Homepage from './Homepage.js'
import CV from './CV.js'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {





  return (
    <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact}/>
        <Route path="/CV" exact component={CV}/>

        

      </Switch>
    </div>
    </Router>
  );
}

export default App;
