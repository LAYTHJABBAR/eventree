<<<<<<< HEAD
import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
  render() {
    const {event} = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image
                size='tiny'
                circular
                src={event.hostPhotoURL}
              />
              <Item.Content>
                <Item.Header as='a'>{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name='clock' /> {event.date} |
            <Icon name='marker' /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees.map(attendee => (
              <EventListAttendee key={attendee.id} attendee={attendee} />
            ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button as='a' color='teal' floated='right' content='View' />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
=======
import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from '../EventList/EventListAttendee';


export default class EventListItem extends Component {
  render() {
    return (
           <Segment.Group>
              <Segment>
                <Item.Group>
                  <Item>
                    <Item.Image size="tiny" oval src={this.props.event.hostPhotoURL} />
                    <Item.Content>
                      <Item.Header as="a">{this.props.event.title}</Item.Header>
                      <Item.Description>
                        Hosted by <a href>{this.props.event.hostedBy}</a>
                      </Item.Description>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Segment>
              <Segment>
                <span>
                  <Icon name="clock" />{this.props.event.date} |
                  <Icon name="marker" />{this.props.event.venue}
                </span>
              </Segment>
              <Segment secondary>
                <List horizontal>
                  {this.props.event.attendees.map(attendee => (
                    <EventListAttendee key={attendee.id} attendee={attendee} />

                  ))}
                  
                </List>
              </Segment>
              <Segment clearing>
                <span>
                {this.props.event.description}
                </span>
                <Button as="a" color="teal" floated="right" content="View" />
              </Segment>
            </Segment.Group>
    )
  }
}
>>>>>>> 00cacb801e6d5345965e74954aa5f9b6e9194a22
