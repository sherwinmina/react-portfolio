import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/skills';
import Welcome from './components/welcome';


export default (
  <Route path='/' component ={App}>
    <IndexRoute component={Welcome} />
    <Route path='about' component ={About}/>
    <Route path='portfolio' component ={Portfolio}/>
    <Route path='contact' component ={Contact}/>
    <Route path='skills' component ={Skills}/>
     
  </Route>
);
