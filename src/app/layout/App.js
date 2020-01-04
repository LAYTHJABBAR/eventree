import React, { Component, Fragment } from "react";
import EventDashboard from '../../components/event/EventDashboard/EventDashboard';
import NavBar from "../../components/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import { HomePage } from "../../components/home/HomePage";
import EventDetailPage  from "../../components/event/EventDetail/EventDetailPage";

import UserDetailedPage from "../../components/user/UserDetail/UserDetailedPage"
import SettingsDashboard from "../../components/user/Settings/SettingsDashboard";
import EventForm from "../../components/event/EventForm/EventForm";
import ModalManager from '../../components/Modals/ModalManager'
import { UserIsAuthenticated } from '../../components/authantication/authWrapper';
import NotFound from "./NotFound";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage}/>
        <Route path='/(.+)' 
        render={() => (
          <Fragment>
            <ModalManager />
            <NavBar />
            <Container className="main">
              <Switch key = {this.props.location.key}>
                <Route exact path='/events' component={EventDashboard}/>
                <Route path='/events/:id' component={EventDetailPage}/>
                <Route path='/manage/:id' component={UserIsAuthenticated(EventForm)}/>
                <Route path='/profile/:id' component={UserIsAuthenticated(UserDetailedPage)}/>
                <Route path='/settings' component={UserIsAuthenticated(SettingsDashboard)}/>
                <Route path='/createEvent' component={UserIsAuthenticated(EventForm)}/> 
                <Route component={NotFound} /> 
              </Switch>     
            </Container>
          </Fragment>
        )}
        />
      </Fragment>      
    );
  }
}

export default withRouter(App);
