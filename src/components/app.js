import React, { Component } from 'react';
import Header from './header';
import {Button} from 'semantic-ui-react'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});
 
  
  render() {
    return (
      <div> 
        <Header/ >
        <div className="continer">
          
        </div>
      </div>  
    );
  }
}
