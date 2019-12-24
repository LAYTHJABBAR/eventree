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
                      <Item.Header> {this.props.event.title}</Item.Header>
                      <Item.Description>
                        Hosted by {this.props.event.hostedBy}
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
