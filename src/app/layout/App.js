import React, { Component, Fragment } from "react";
import EventDashboard from "../../components/event/EventDashboard/EventDashboard";
import NavBar from "../../components/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { HomePage } from "../../components/home/HomePage";
import { EventDetailPage } from "../../components/event/EventDetail/EventDetailPage";
import { PeopleDashboard } from "../../components/user/PeopleDashboard/PeopleDashboard";
import { UserDetailPage } from "../../components/user/UserDetail/UserDetailPage";
import { SettingsDashboard } from "../../components/user/Settings/SettingsDashboard";
import EventForm from "../../components/event/EventForm/EventForm";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <Route exact path='/' component={HomePage}/>
          <Route path='/events' component={EventDashboard}/>
          <Route path='/events/:id' component={EventDetailPage}/>
          <Route path='/people' component={PeopleDashboard}/>
          <Route path='/profile/:id' component={UserDetailPage}/>
          <Route path='/settings' component={SettingsDashboard}/>
          <Route path='/createEvent' component={EventForm}/>
          
        </Container>
      </Fragment>
    );
  }
}

export default App;
