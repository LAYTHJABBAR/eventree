import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react';

export default class EventListAttendee extends Component {
  render() {
    return (
      <List.Item>
        <Image as='a' size='mini' oval src='https://randomuser.me/api/potraits/men/1.jpg'/>
      </List.Item>
    )
  }
}
