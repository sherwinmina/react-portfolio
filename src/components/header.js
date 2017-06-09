import React, { Component } from 'react'

import { Sidebar, Segment, Button, Menu, MenuItem, Image, Icon, Header } from 'semantic-ui-react'


import About from './About';
import Portfolio from './Portfolio';

class SidebarLeftSlideOut extends Component {
  state = { visible: false }

  handleClick = () => {
    this.setState({ active: !this.state.active })
    this.setState({ visible: !this.state.visible })

  }

  render() {
    const { visible, active } = this.state
    return (
      <div  color='blue' >
        <Menu style={{color:'#F4F4F4', backgroundColor:'#1a1a1a', height: '100px'}} size='massive' tabular basic >
          
          <MenuItem style={{color:'#F4F4F4', backgroundColor:'#eeeadd'}} toggle  active={active} onClick={this.handleClick}>
            <Button style={{backgroundColor:'#c0b283'}} animated='vertical'>
              <Button.Content icon_name="content" visible>
                <Icon style={{color:'white'}} name='content' />
              </Button.Content>
              <Button.Content hidden>
                <Icon style={{color:'white'}} name='down arrow' />
              </Button.Content>
            </Button>
          </MenuItem> 

          <div>
             <div className="first-name" >SHERWIN  </div ><div className="last-name"> Mina</div>
             <div className="head-tag">(Web Developer)</div>
          </div>
         

        </Menu>


        <Sidebar.Pushable as={Segment} style={{marginTop:'-20px', backGroundColor:'#e2e1d0'}}>
          <Sidebar as={Menu} animation='slide out' width='wide' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
             <Icon loading size='big' name='sun' />
              <Icon name='user'  />
              About
            </Menu.Item>
            <Menu.Item name='anchor'>
              <Icon name='anchor' />
              Portfolio
            </Menu.Item>
            <Menu.Item name='mail'>
              <Icon name='mail' />
              Contact
            </Menu.Item>
          </Sidebar>
          
          <Sidebar.Pusher >
            <Segment basic style={{ backgroundColor:'#282828', padding: '20px'}}>
              
              <About />  

            </Segment>
            <Segment basic>
              
             <Portfolio />
              
            </Segment>
              <About />  
          </Sidebar.Pusher>
        </Sidebar.Pushable>
         <Portfolio />
      </div>
    )
  }
}

export default SidebarLeftSlideOut