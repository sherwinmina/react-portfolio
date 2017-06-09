import React, { Component } from 'react'
import { Container, Grid, Card, Icon, Image } from 'semantic-ui-react'

class Portfolio extends Component {
  render () {
    return (
      <Grid celled='internally'>
       <Grid.Row>
         <Container primary textAlign='center'> <h1 style={{color:'grey'}} textAlign='center'>Portfolio</h1> </Container>
       
        </Grid.Row>
        <Grid.Row style={{height: '300px'}}>
          <Grid.Column width={6}>
          
            <Card>
           
            <Card.Content>
              <Card.Header>
                Beer Companion
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Joined in 2015
                </span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>

          </Grid.Column>
          <Grid.Column width={10}>
            <p>Hello</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{height: '100%'}}>
          <Grid.Column width={8}>
           
          </Grid.Column>
          <Grid.Column width={8}>
            
        
          </Grid.Column>
        </Grid.Row>
      </Grid>

      
    )
  }
}

export default Portfolio