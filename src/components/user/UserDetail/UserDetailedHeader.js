import React, { Fragment } from 'react';
import { Segment, Item, Header, Grid, Button } from 'semantic-ui-react';
import { differenceInYears } from 'date-fns';
import {Link} from 'react-router-dom'

const UserDetailedHeader = ({ profile, isCurrentUser }) => {

  const age =
    profile.dateOfBirth &&
    differenceInYears(Date.now(), profile.dateOfBirth.toDate());
  return (
    <Grid.Column width={16}>
      <Segment>
        <Item.Group>
          <Item>
            <Fragment
            
            >
              <Item.Image
                avatar
                size='small'
                src={profile.photoURL || '/assets/user.png'}
              />
            </Fragment>

            <Item.Content verticalAlign='bottom'>
              <Header as='h1'>{profile.displayName}</Header>
              <br />
              <Header as='h3'>{profile.occupation}</Header>
              <br />
              <Header as='h3'>
                {age + ' years old' || 'unknown age'}, Lives in{' '}
                {profile.city || 'unknown city'}
              </Header>
            </Item.Content>
          </Item>
        </Item.Group>
      {isCurrentUser ? (
  <Button
    size='large'
    as={Link}
    to='/settings'
    color='purple'
    content='Edit Profile'
  />
) : (
 <h></h>
)}
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedHeader;