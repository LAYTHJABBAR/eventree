import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import {connect} from 'react-redux';
import EventList from "../EventList/EventList";
import cuid from "cuid";


const mapState = (state) => ({
  events: state.events
})


class EventDashboard extends Component {


  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/usr.png";
    this.props.createEvent(newEvent);
  };
  

  handleUpdateEvent = (updatedEvent) => {
    this.props.updateEvent(updatedEvent);
  }

  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id);
  }

  render() {

    const {events} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events}  deleteEvent={this.handleDeleteEvent}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState)(EventDashboard);
