import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";

import { getEventsForDashboard } from "../eventActions";
import { firestoreConnect } from "react-redux-firebase";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const mapState = state => ({
  events: state.events,
  loading: state.async.loading
});

const actions = {
  getEventsForDashboard
};

class EventDashboard extends Component {
  state = {
    moreEvents: false
  }

  async componentDidMount() {
    let next = await this.props.getEventsForDashboard();
    console.log(next)

    if (next && next.docs && next.docs.length > 4) {
      this.setState({
        moreEvents: true
      })
    }
  }

  getNextEvents = async () => {
    const {events} = this.props;
    let lastEvent = events && events[events.length - 1];
    console.log(lastEvent);
    let next = await this.props.getEventsForDashboard(lastEvent);
    console.log(next);
    if (next && next.docs && next.docs.length <= 4) {
      this.setState({
        moreEvents: false
      })
    }
  }

  render() {
    const { events, loading } = this.props;
    if (loading) return <LoadingComponent />
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} />
          <Button onClick={this.getNextEvents} disabled={!this.state.moreEvents} content='More Events' color='purple' flaoted='right' />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: "events" }])(EventDashboard));
