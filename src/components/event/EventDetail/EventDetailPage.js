import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventDetailHeader from "./EventDetailHeader";
import EventDetailInfo from "./EventDetailInfo";

import EventDetailSideBar from "./EventDetailSideBar";
import { withFirestore } from "react-redux-firebase";
import { objectToArray } from "../../../app/common/util/helpers";
import {goingToEvent, cancelGoingToEvent} from '../../user/UserActions'
import NotFound from "../../../app/layout/NotFound";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};
  if (
    state.firestore.ordered.events &&
    state.firestore.ordered.events.length > 0
  ) {
    event =
      state.firestore.ordered.events.filter(event => event.id === eventId)[0] ||
      {};
  }
  return {
    event,
    auth: state.firebase.auth
  };
};
const actions = {
  goingToEvent,
  cancelGoingToEvent
};
class EventDetailPage extends Component {
  async componentDidMount() {
    const { firestore, match } = this.props;
    await firestore.setListener(`events/${match.params.id}`);
  }
  async componentWillUnmount() {
    const { firestore, match } = this.props;
    await firestore.unsetListener(`events/${match.params.id}`);
  }

  render() {
    const {
      event,
      auth,
      goingToEvent,
      cancelGoingToEvent,
      openModal
    } = this.props;
    const attendees =
      event && event.attendees && objectToArray(event.attendees);
    const isHost = event.hostUid === auth.uid;
    const isGoing = attendees && attendees.some(a => a.id === auth.uid)

    if (Object.keys(event).length === 0) return <NotFound />

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventDetailHeader
            event={event}
            isGoing={isGoing}
            isHost={isHost}
            goingToEvent={goingToEvent}
            cancelGoingToEvent={cancelGoingToEvent}
            // aunthenticated={aunthenticated}
            openModal={openModal}
          />
          <EventDetailInfo event={event} />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventDetailSideBar attendees={attendees} />
        </Grid.Column>
      </Grid>
    );
  }
}
export default withFirestore(connect(mapState, actions)(EventDetailPage));
