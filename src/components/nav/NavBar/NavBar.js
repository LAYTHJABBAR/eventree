import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withFirebase} from 'react-redux-firebase'
import { Menu, Container, Button, Icon } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import { openModal } from '../../Modals/modalActions';

const actions = {
  openModal,
}

const mapState = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})
class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal('LoginModal');
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push('/');
  } 

  render() {
    const { auth, profile } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <img src='/assets/eventree.png' alt='logo' size='medium'/>
            Eventree
          </Menu.Item>
          <Menu.Item as={NavLink} exact to='/events' name='Events' />
          
          <Menu.Item>
            <Button
              as={Link}
              to='/createEvent'
              color='yellow'
               > Create Event  <Icon name='pencil alternate' inverted position='right' ></Icon>

          </Button>
          </Menu.Item>
          {authenticated ? (
            <SignedInMenu auth= {auth} profile={profile} signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)));
