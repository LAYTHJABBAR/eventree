import React, { Component, Fragment } from "react";
import EventDashboard from "../../components/event/EventDashboard/EventDashboard";
import NavBar from "../../components/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import { HomePage } from "../../components/home/HomePage";
import EventDetailPage  from "../../components/event/EventDetail/EventDetailPage";
import  {PeopleDashboard}  from "../../components/user/PeopleDashboard/PeopleDashboard";
import UserDetailPage from "../../components/user/UserDetail/UserDetailPage"
import SettingsDashboard from "../../components/user/Settings/SettingsDashboard";
import EventForm from "../../components/event/EventForm/EventForm";
import ModalManager from '../../components/Modals/ModalManager'
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
                <Route path='/people' component={PeopleDashboard}/>
                <Route path='/profile/:id' component={UserDetailPage}/>
                <Route path='/settings' component={SettingsDashboard}/>
                <Route path={['/createEvent', '/manage/:id']} component={EventForm}/>         
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
