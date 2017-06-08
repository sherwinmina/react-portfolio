import React, { Component } from 'react'

import { Sidebar, Segment, Button, Menu, MenuItem, Image, Icon, Header } from 'semantic-ui-react'



import About from './About';

class SidebarLeftSlideOut extends Component {
  state = { visible: false }

  handleClick = () => {
    this.setState({ active: !this.state.active })
    this.setState({ visible: !this.state.visible })

  }

  render() {
    const { visible, active } = this.state
    return (
      <div style={{paddingTop:"20px"}}>
        <Menu tabular basic >
          
          <MenuItem toggle  active={active} onClick={this.handleClick}>
            <Icon name='sidebar'  size='large'/>
          </MenuItem> 

         
          <h1>   Sherwin Mina</h1>

        </Menu>


        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide out' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
             <Icon loading size='big' name='sun' />
              <Icon name='user'  />
              About
            </Menu.Item>
            <Menu.Item name='mail'>
              <Icon name='mail' />
              Contact
            </Menu.Item>
          </Sidebar>
          
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>About</Header>
              <About />  
            </Segment>
            <Segment basic>
              <Header as='h3'>About</Header>
              <About />
              
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarLeftSlideOut