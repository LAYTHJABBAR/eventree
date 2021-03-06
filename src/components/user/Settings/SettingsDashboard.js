import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import SettingsNav from './SettingsNav';
import { Route, Redirect, Switch } from 'react-router';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';
import { updatePassword } from '../../authantication/authActions';
import { updateProfile } from '../../user/UserActions';

const actions = {
  updatePassword,
  updateProfile
}

const mapState = (state) =>  ({
  user: state.firebase.profile
})

const SettingsDashboard = ({ updatePassword, user, updateProfile }) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic' />
          <Route path='/settings/basic' render ={() => (<BasicPage initialValues={user} updateProfile={updateProfile} />)}/>
          <Route path='/settings/about' render ={() => (<AboutPage initialValues={user} updateProfile={updateProfile} />)}/>
          <Route path='/settings/photos' component={PhotosPage} />
          <Route path='/settings/account' render={() => <AccountPage updatePassword={updatePassword} />} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  )
}

export default connect(mapState, actions)(SettingsDashboard)
