import React from 'react';
import { Grid, Image, Container, List } from 'semantic-ui-react';

const Skills = () => {
  return (
    <div> 
    <Container textAlign='center'> <h1>Skills</h1> </Container>
       
       <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Container>
                Front End
                <List>
                  <List.Item>HTML</List.Item>
                  <List.Item>CSS</List.Item>
                  <List.Item>Javascript</List.Item>
                  <List.Item>Jasvascript Frameworks</List.Item>
                  <List.Item>CSS Preporcessor</List.Item>
                  <List.Item>Version Control</List.Item>
                  <List.Item>Responsive Design</List.Item>
                  <List.Item>Browser Developer Tools</List.Item>
                  <List.Item>Building and Automation/ Tools and Web Performance</List.Item>
                  <List.Item>Command Line</List.Item>
                
                </List>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container>
                Back End
                <List>
                  <List.Item>Apples</List.Item>
                  <List.Item>Pears</List.Item>
                  <List.Item>Oranges</List.Item>
                </List>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>  
    </div>
  )
}

export default Skills;