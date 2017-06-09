import React, { Component } from 'react'
import {Grid, Button, Header, Image, Reveal, Item} from 'semantic-ui-react'

class componentName extends Component {
  render () {
    return (
     
    <div style={{minHeight: '700px'}}>  
  
    <Item.Group>
    <Item>
        <Reveal animated='move'>
          <Reveal.Content visible>
            <Image src='http://www.xconomy.com/wordpress/wp-content/images/2017/04/Depositphotos_79189162_m-2015.jpg' size='small' />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src='http://goodfilmguide.co.uk/wp-content/uploads/2010/04/avatar12.jpg' size='small' />
          </Reveal.Content>
        </Reveal>

      <Item.Content>
        <Item.Meta>
          <h1>Hi, I'm Sherwin</h1>
          <p>
           I enjoy building responve websites
          </p>
          
        </Item.Meta>
       
        <Item.Extra>
          <div>
            <Button circular color='facebook' icon='facebook' />
            <Button circular color='twitter' icon='twitter' />
            <Button circular color='linkedin' icon='linkedin' />
            <Button circular color='google plus' icon='google plus' />
          </div>
        </Item.Extra>
      </Item.Content>
    </Item>

  
  </Item.Group>

         
      </div>
    )
  }
}

export default componentName