import React, { Component } from 'react';
import Header from './header';
import {Button} from 'semantic-ui-react'


export default class App extends Component {
  
  render() {
    return (
      <div> 
        <Header/ >
         {this.props.children}

      </div>  
    );
  }
}
