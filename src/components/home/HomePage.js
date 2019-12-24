import React from 'react';
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';

export const HomePage = ({history}) => {
  return (
        <Segment inverted textAlign='center' vertical className='masthead'>
        <Container text>
          <Header as='h1' inverted>
            <Image
              size='Xlarge'
              src='/assets/eventree.png'
              alt='logo'
              style={{ marginBottom: 12 }}
            />
          </Header>
          <Button onClick={() => history.push('/events')} size='huge' inverted>
            Get started
            <Icon name='right arrow' inverted />
          </Button>
        </Container>
      </Segment>
  )
}
