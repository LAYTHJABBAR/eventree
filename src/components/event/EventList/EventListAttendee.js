import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react';

<<<<<<< HEAD
class EventListAttendee extends Component {
  render() {
    const {attendee} = this.props;
    return (
      <List.Item>
          <Image as='a' size='mini' circular src={attendee.photoURL}/>
=======
export default class EventListAttendee extends Component {
  render() {
    return (
      <List.Item>
        <Image as='a' size='mini' oval src={this.props.attendee.photoURL} />
>>>>>>> 00cacb801e6d5345965e74954aa5f9b6e9194a22
      </List.Item>
    )
  }
}
<<<<<<< HEAD

export default EventListAttendee;
=======
>>>>>>> 00cacb801e6d5345965e74954aa5f9b6e9194a22
