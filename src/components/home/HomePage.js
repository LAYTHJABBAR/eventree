import React from 'react';
import { Segment, Container, Image } from 'semantic-ui-react';

export const HomePage = ({history}) => {
  return (
        <Segment  textAlign='center'  vertical className='masthead' inverted>
        <Container text>
      
        <div id="leaves">
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i> 
</div>
            <Image
            className='Change'
            onClick={() => history.push('/events')} size='meduim' 
            position='center'
            inverted
              src='/assets/eventree.png'
              alt='logo'
              style={{ marginBottom: 30 }}
              
            />

        </Container>
      </Segment>
  )
}
