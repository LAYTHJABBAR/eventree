import React, {Fragment} from "react";
import { Segment, Image, Item, Header, Button, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {format} from "date-fns";
import { version } from "moment";

const eventImageStyle = {
  filter: "brightness(60%)"
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white"
};

const EventDetailHeader = ({event, isHost, isGoing, goingToEvent, cancelGoingToEvent}) => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/${event.category}.jpg`}
          fluid
          style={eventImageStyle}
        />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.title}
                  style={{ color: "white" }}
                />
                <p style={{color: 'yellow'}}>{event.date && format(event.date.toDate(), "EEEE do LLLL")}

</p>
                <p>
                  Hosted by <strong>
                    <Link to={`/profile/${event.hostUid}`} style={{color: 'red'}}>{event.hostedBy}</Link></strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom" clearing>
       {!isHost && event.cancelled &&
        <Fragment>
          {isGoing ? (<Button onClick={() => cancelGoingToEvent(event)}>Canel my Place</Button>) : (<Button onClick={() => goingToEvent(event)} color="purple">JOIN THIS EVENT</Button>)}
        </Fragment>}

      {isHost && 
        <Button as={Link} to={`/manage/${event.id}`} color="orange" floated="right">
          Manage Event
        </Button>}
      </Segment>
    </Segment.Group>
  );
};
export default EventDetailHeader;