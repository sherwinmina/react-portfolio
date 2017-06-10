import React, { Component } from 'react'
import {Link, Route} from 'react-router'

import {
  Divider,
  Sidebar, 
  Segment, 
  Button,
  Menu, 
  MenuItem, 
  Image, 
  Icon, 
  Header 
} from 'semantic-ui-react'

import Pusher from './Pusher'

const color = 'purple'

class SidebarLeftSlideOut extends Component {
  
  state = { visible: false,  activeItem: 'home', color : null}

  handleClick = () => {
    this.setState({ active: !this.state.active })
    this.setState({ visible: !this.state.visible })
  }

  handleItemClick = (e, { name, color }) => this.setState({ activeItem: name, color: 'teal'})

  render() {
    const { visible, active, activeItem, color } = this.state

    console.log(this.state)

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
          <Sidebar as={Menu} animation='slide out' width='thin' visible={visible} icon='labeled' vertical inverted pointing >
            
             <Link  to="/" ><Menu.Item name='home' active={activeItem === 'home' }  onClick={this.handleItemClick}>
              <Icon name='home'  />
              Home
            </Menu.Item></Link>

            <Link  to="/About" ><Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
              <Icon name='user' />
              About
            </Menu.Item></Link>

            <Link  to="/portfolio" ><Menu.Item name='work' active={activeItem === 'work'}  onClick={this.handleItemClick}>
              <Icon name='anchor' />
              Work
            </Menu.Item></Link>
           
             <Link  to="/skills" ><Menu.Item name='code' active={activeItem === 'code'} onClick={this.handleItemClick}>
              <Icon name='code' />
              Skills
            </Menu.Item></Link>

            <Link  to="/contact"><Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>
              <Icon name='mail' />
              Contact
            </Menu.Item></Link>
          </Sidebar>
          
         <Sidebar.Pusher >
          <Segment basic style={{ backgroundColor: 'white', padding: '20px', height:'700px'}}>
            {this.props.name}
          </Segment>
        </Sidebar.Pusher>
          
        </Sidebar.Pushable>
         
      </div>
    )
  }
}

export default SidebarLeftSlideOut