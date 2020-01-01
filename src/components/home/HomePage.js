import React from 'react';
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';

export const HomePage = ({history}) => {
  return (
        <Segment  textAlign='center'  vertical className='masthead' inverted>
        <Container text>
          <Header as='h1' inverted>
            <Image
              src='/assets/eventree.png'
              alt='logo'
              style={{ marginBottom: 30 }}
            />
            
          </Header>
          <Button onClick={() => history.push('/events')} size='meduim' inverted>
            Get started
            <Icon name='right arrow' inverted />
          </Button>
        </Container>
      </Segment>
  )
}
