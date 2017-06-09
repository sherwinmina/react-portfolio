import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


export default (
  <Route path='/' component ={App}>
    <IndexRoute component={About} />
    <Route path='portfolio' component ={Portfolio}/>
    <Route path='contact' component ={Contact}/>
  </Route>
);
