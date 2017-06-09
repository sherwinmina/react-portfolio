import React, { Component } from 'react'
import {Link} from 'react-router'

import { Divider,Sidebar, Segment, Button, Menu, MenuItem, Image, Icon, Header } from 'semantic-ui-react'


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

            <Link  to="/"><Menu.Item name='user'>
              <Icon name='user' />
              About
            </Menu.Item></Link>
             <Divider />


            <Link  to="/portfolio"><Menu.Item name='anchor'>
              <Icon name='anchor' />
              Portfolio
            </Menu.Item></Link>
            <Divider />

            <Link  to="/contact"><Menu.Item name='mail'>
              <Icon name='mail' />
              Contact
            </Menu.Item></Link>
          </Sidebar>
          
          <Sidebar.Pusher >
            <Segment basic style={{ backgroundColor:'#282828', padding: '20px', height:'700px'}}>
              
               

            </Segment>
            <Segment basic>
              
             
              
            </Segment>
            
          </Sidebar.Pusher>
        </Sidebar.Pushable>
         
      </div>
    )
  }
}

export default SidebarLeftSlideOut