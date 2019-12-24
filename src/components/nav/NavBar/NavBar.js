import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';


export default class NavBar extends Component {
  render() {
    return (
            <Menu inverted fixed="top">
              <Container>
                <Menu.Item header>
                  <img src="/assets/eventree.png" alt="logo" />
                  Eventree
                </Menu.Item>
                <Menu.Item name="Events List" />
                <Menu.Item>
                  <Button floated="right" positive inverted content="Create Event" />
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
