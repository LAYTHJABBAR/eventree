import React from "react";
import {
  Segment,
  Grid,
  Header,
  List,
  Item,
  Icon,
  Label
} from "semantic-ui-react";
import { format } from "date-fns";

const UserDetailedDescription = ({ profile }) => {
  return (
    <Grid.Column width={16}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={12}>
            <Label
              icon="book"
              content={profile.displayName}
              textColor="red"
            ></Label>
            <p>
              <span style={{color: 'purple'}}>I am a:</span> <strong>{profile.occupation || "None"}</strong>
            </p>
            <p >
              <span style={{color: 'purple'}}>Originally from:</span> <strong>{profile.origin || "None"}</strong>
            </p>
            <p>
            <span style={{color: 'purple'}}>Member Since:</span>{" "}
              <strong>
                {profile.createdAt &&
                  format(profile.createdAt.toDate(), "dd LLL yyyy")}
              </strong>
            </p>
            <p >
           
              <span style={{color: 'purple'}}>About me:</span>{" "}<strong>{profile.about}</strong>
            </p>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as="h4" icon textAlign="center">
              <Icon name="heart ouline" circular color="red" />
              <Header.Content>Interests</Header.Content>
            </Header>
            <Header as="h5" icon textAlign="center">
            <List>
              {profile.interests ? (
                profile.interests.map((interest, index) => (
                  <Item key={index} >
                    {/* <Icon name="heart" color="red" /> */}
                <Item.Content style={{color: 'red'}}>{interest}</Item.Content>
                  </Item>
                ))
              ) : (
                <h style={{color: 'red'}}>None</h>
              )}
            </List>
            </Header>
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedDescription;
