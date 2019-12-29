import React, { Fragment } from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const SettingsNav = () => {
  return (
        <Fragment>
          <Menu vertical>
            <Header icon="user" attached inverted color="purple" content="User" className="ui purple inverted header"/>
            <Menu.Item as={NavLink} to='/settings/basic'>User Profile</Menu.Item>
            <Menu.Item as={NavLink} to='/settings/about'>About Me</Menu.Item>
            <Menu.Item as={NavLink} to='/settings/photos'>My Photos</Menu.Item>
          </Menu>
          <Menu vertical>
            <Header
              icon="settings"
              attached
              inverted
              color="purple"
              content="Account"
            />
            <Menu.Item as={NavLink} to='/settings/account'>My Account</Menu.Item>
          </Menu>
        </Fragment>
  )
}

export default SettingsNav;
