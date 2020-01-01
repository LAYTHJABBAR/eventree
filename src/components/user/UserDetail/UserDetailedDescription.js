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
    <Grid.Column width={12}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Label
              icon="book"
              content={profile.displayName}
              textColor="red"
            ></Label>
            <p>
              I am a: <strong>{profile.occupation || "tbn"}</strong>
            </p>
            <p>
              Originally from: <strong>{profile.origin || "tbn"}</strong>
            </p>
            <p>
              Member Since:{" "}
              <strong>
                {profile.createdAt &&
                  format(profile.createdAt.toDate(), "dd LLL yyyy")}
              </strong>
            </p>
            <p textAlign="center">
              {" "}
              About me: <strong>{profile.about}</strong>
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Header as="h3" icon textAlign="center">
              <Icon name="heart ouline" circular color="red" />
              <Header.Content>Interests</Header.Content>
            </Header>

            <List>
              {profile.interests ? (
                profile.interests.map((interest, index) => (
                  <Item key={index}>
                    <Icon name="heart" color="red" />
                    <Item.Content>{interest}</Item.Content>
                  </Item>
                ))
              ) : (
                <p>No interests</p>
              )}
            </List>
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedDescription;
