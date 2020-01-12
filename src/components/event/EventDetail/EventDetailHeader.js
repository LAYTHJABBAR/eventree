import React, { Fragment } from "react";
import { Segment, Image, Item, Header, Button} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { format} from "date-fns";
import {toastr} from 'react-redux-toastr';
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


const EventDetailHeader = ({
  event,
  isHost,
  isGoing,
  hostJoin,
  cancelHostJoin,
  goingToEvent,
  cancelGoingToEvent,
  openModal,
  authenticated
}) => {

  return (
    <Segment.Group>
    
      <Segment basic attached="top" style={{ padding: "0" }}>
        { event.cancelled ?  (

          <Image
            src={`/assets/${event.category}.jpg`}
            fluid
            style={eventImageStyle}
            label={{
              as: 'a',
              color: 'red',
              content: 'Event Cancelled',
              icon: 'trush',
              ribbon: true,
            }}
            />
        ) : (
          <Image
          src={`/assets/${event.category}.jpg`}
          fluid
          style={eventImageStyle}
          />
        )
        }

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.title}
                  style={{ color: "white" }}
                />
                <p style={{ color: "yellow" }}>
                  {event.date && format(event.date.toDate(), "EEEE do LLLL Y")}
                </p>
                <p>
                  Hosted by:{" "}
                  <strong>
                    <Link
                      to={`/profile/${event.hostUid}`}
                      style={{ color: "red" }}
                    >
                      {event.hostedBy}
                    </Link>
                  </strong>
                </p>
                <p style={{color: 'blue'}}>Categary: {event.category}</p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom" clearing>
      {((Date.now()) < (event.date.seconds * 1000)) && (
     <Fragment>
        {((!isHost || !event.hostedBy) && !event.cancelled) && (
          <Fragment>
            {isGoing  ? (
              <Button  onClick={() => cancelGoingToEvent(event)} color = 'red'>
               CANCEL MY PLACE
              </Button>
            ) : (
              
              <Button disabled={event.cancelled} onClick={() => goingToEvent(event)} color="purple">
                JOIN THIS EVENT
              </Button>
              
            )}
          </Fragment>
        )}
         </Fragment>
        )}
        {isHost && (
          <Button
            as={Link}
            to={`/manage/${event.id}`}
            color="green"
            floated="right"
          >
            Manage Event
          </Button>
        )}

{(event.id && !event.cancelled && (event.hostedBy ===(false || null)) && event.attendees && isGoing) && (
  
                <Button
                  type="button"
                  color={"orange"}
                  content={ "Add Host To Event"}
                  onClick={() => {
                    toastr.confirm('By Pressing OK you will be the Manager for this event',  { onOk: () => hostJoin(event),
                      onCancel: () => console.log('CANCEL: clicked')});
                  }}
                  floated="right"
                />
              )
}
       
{(event.id && !event.cancelled && (event.hostedBy !== (false || null) )  && event.attendees && isGoing && isHost) && (
  
  <Button
    type="button"
    color={"orange"}
    content={ "Remove Managment Control"}
    onClick={() => {
      toastr.confirm('Are you sure about that!, you Will loss the Managment Control by pressing ok',  { onOk: () => cancelHostJoin(event),
        onCancel: () => console.log('CANCEL: clicked')});
    }}
    floated="right"
  />
)
}
      </Segment>
    </Segment.Group>
  );
};
export default EventDetailHeader;
