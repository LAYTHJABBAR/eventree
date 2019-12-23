import React, { Component, Fragment } from 'react';
import EventDashboard from '../../components/event/Eventdashboard/EventDashboard';
import NavBar from '../../components/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';

class App extends Component {

  
  
  render () {
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </Fragment>
        

      
    );

  }
}


export default App;