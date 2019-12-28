import React from 'react';
import { Form, Segment, Button, Label } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import {login} from '../authActions';
import {connect} from 'react-redux'

const actions = {
  login
}

const LoginForm = ({login, handleSubmit, error}) => {
  return (
    <Form  size="large" onSubmit={handleSubmit(login)} autoComplete='off'>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        {error === `The email address is badly formatted.` && <Label basic color='red'>No User Under this Email</Label>}
        {error === `There is no user record corresponding to this identifier. The user may have been deleted.` && <Label basic color='red'>No User Under this Email</Label>}
        {error === `signInWithEmailAndPassword failed: Second argument "password" must be a valid string.` && <Label basic color='red'>Wrong password</Label>}
        {error === `signInWithEmailAndPassword failed: First argument "email" must be a valid string.` && <Label basic color='red'>Please enter a valid Email</Label>}

        
        <Button fluid size="large" color="purple">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(null, actions)(reduxForm({form: 'loginForm'})(LoginForm));