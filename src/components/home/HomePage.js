import React from 'react';
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';

export const HomePage = ({history}) => {
  return (
        <Segment inverted textAlign='center' vertical className='masthead'>
        <Container text>
          <Header as='h1' inverted>
            <Image
<<<<<<< HEAD
              size='Xlarge'
=======
              size='XLarge'
>>>>>>> 6cfd7995147fcea1a50b98d35cd7a134bd4c942b
              src='/assets/eventree.png'
              alt='logo'
              style={{ marginBottom: 12 }}
            />
<<<<<<< HEAD
=======
            
>>>>>>> 6cfd7995147fcea1a50b98d35cd7a134bd4c942b
          </Header>
          <Button onClick={() => history.push('/events')} size='huge' inverted>
            Get started
            <Icon name='right arrow' inverted />
          </Button>
        </Container>
      </Segment>
  )
}
