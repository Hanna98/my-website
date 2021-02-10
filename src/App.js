import './App.css';
import React, { useState, useContext } from 'react'

import Portfolio from './Portfolio.js'
import Contact from './Contact.js'
import Homepage from './Homepage.js'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


const App = () => {





  return (
    <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
