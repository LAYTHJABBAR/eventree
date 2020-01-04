import React from 'react';
import { Segment, Container, Image } from 'semantic-ui-react';

export const HomePage = ({history}) => {
  return (
        <Segment  textAlign='center'  vertical className='masthead' inverted>
        <Container text>
            <Image
            className='Change'
            onClick={() => history.push('/events')} size='massive' 
            position='center'
            inverted='true'
              src='/assets/eventree.png'
              alt='logo'
              style={{ marginBottom: 30 }}
              
            />

        </Container>
      </Segment>
  )
}
