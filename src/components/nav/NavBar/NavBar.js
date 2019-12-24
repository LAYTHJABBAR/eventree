import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';


export default class NavBar extends Component {
  render() {
    return (
            <Menu inverted fixed="top">
              <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                  <img src="/assets/eventree.png" alt="logo" />
                  Eventree
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name="Events List" />
                <Menu.Item as={NavLink} to='/people' name="People" />
                <Menu.Item>
                  <Button as={Link} to="/createEvent" floated="right" positive inverted content="Create Event" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button basic inverted content="Login" />
                  <Button basic inverted content="Register" style={{marginLeft: '0.5em'}} />
                </Menu.Item>
              </Container>
            </Menu>
    )
  }
}
