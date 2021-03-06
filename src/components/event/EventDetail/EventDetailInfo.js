import React, { useState } from 'react';
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';
import EventDetailedMap from '../EventDetail/EventDetailMap';
import { format } from 'date-fns';

const EventDetailInfo = ({ event }) => {
  const [isMapOpen, showMapToggle] = useState(false);
  return (
    <Segment.Group>
      <Segment attached='top'>
        <Grid>
          <Grid.Column width={3}>
            <Icon size='large' color='black' name='info' />
          </Grid.Column>
          <Grid.Column width={16}>
            <p style={{overflowWrap: 'break-word'}}>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={3}>
            <Icon name='calendar' size='large' color='black' />
          </Grid.Column>
          <Grid.Column width={16}>
            {event.date &&
            <span>
              {format(event.date.toDate(), 'EEEE do LLL')} at{' '}
              {format(event.date.toDate(), 'h:mm a')}
            </span>}
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={3}>
            <Icon name='marker' size='large' color='black' />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{event.venue}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              onClick={() => showMapToggle(!isMapOpen)}
              color='purple'
              size='tiny'
              content={isMapOpen ? 'Hide map' : 'Show map'}
            />
          </Grid.Column>
        </Grid>
      </Segment>
      {isMapOpen && (
        <EventDetailedMap
          lat={event.venueLatLng.lat}
          lng={event.venueLatLng.lng}
        />
      )}
    </Segment.Group>
  );
};

export default EventDetailInfo;