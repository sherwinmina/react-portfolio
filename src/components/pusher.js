import React, { Component } from 'react'
import {Sidebar, Segment} from 'semantic-ui-react'

class Pusher extends Component {
  render () {
    return (
        <Sidebar.Pusher >
          <Segment basic style={{ backgroundColor:'#282828', padding: '20px', height:'700px'}}>
            
          </Segment>
        </Sidebar.Pusher>
     
    )
  }
}

export default Pusher