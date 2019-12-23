import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem';

<<<<<<< HEAD
class EventList extends Component {
=======
export default class EventList extends Component {
>>>>>>> 00cacb801e6d5345965e74954aa5f9b6e9194a22
  render() {
    return (
      <Fragment>
        {this.props.events.map(event => (
<<<<<<< HEAD
          <EventListItem key={event.id} event={event}/>
        ))}
=======
          <EventListItem key={event.id} event={event} />
        ))}       
>>>>>>> 00cacb801e6d5345965e74954aa5f9b6e9194a22
      </Fragment>
    )
  }
}
<<<<<<< HEAD

export default EventList
=======
>>>>>>> 00cacb801e6d5345965e74954aa5f9b6e9194a22
