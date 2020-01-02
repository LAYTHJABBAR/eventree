import React, { Component } from "react";
import { Segment, Item, Icon, List, Button, Label } from "semantic-ui-react";
import EventListAttendee from "../EventList/EventListAttendee";
import { Link } from "react-router-dom";
import { objectToArray } from "../../../app/common/util/helpers";
import { format } from "date-fns";


export default class EventListItem extends Component {
  render() {
    const { event } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as={Link} to={`/events/${event.id}`}>
                  {" "}
                  {event.title}
                </Item.Header>
                <Item.Description>
                  Hosted by{" "}
                  <Link
                    as={Link}
                    to={`/profile/${event.hostUid}`}
                    style={{ color: "red" }}
                  >
                    {event.hostedBy}
                  </Link>
                </Item.Description>
                <Item.Description>Category: {" "}<Link style={{color: 'blue'}}>{event.category}</Link>
                </Item.Description>
                {event.cancelled && (
                  <Label
                    style={{ top: "8px", right: "0px" }}
                    size="meduim"
                    tag="right"
                    color="red"
                    content="Event Cancelled"
                  />
                )}
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />
            {format(event.date.toDate(), "EEEE do LLL")} at{" "}
            {format(event.date.toDate(), "h:mm a")} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              objectToArray(event.attendees).map(attendee => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button
            as={Link}
            to={`/events/${event.id}`}
            color="purple"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}
