import React from 'react';
import { Button, Divider, Form, Header, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import RadioInput from '../../../app/common/form/RadioInput';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import PlaceInput from '../../../app/common/form/PlaceInput';
import SelectInput from '../../../app/common/form/SelectInput';

const interests = [
  { key: 'Drinks', text: 'Drinks', value: 'Drinks' },
  { key: 'Culture', text: 'Culture', value: 'Culture' },
  { key: 'Film', text: 'Film', value: 'Film' },
  { key: 'Food', text: 'Food', value: 'Food' },
  { key: 'Music', text: 'Music', value: 'Music' },
  { key: 'Travel', text: 'Travel', value: 'Travel' },
  {key: 'Sport', text: 'Sport', value: 'Sport'},
  {key: 'Conference', text: 'Conference', value: 'Conference'},
  {key: 'Family', text: 'Family', value: 'Family'},
  {key: 'Reading', text: 'Reading', value: 'Reading'},
  {key: 'LifeStyle', text: 'LifeStyle', value: 'LifeStyle'},
  {key: 'Dancing', text: 'Dancing', value: 'Dancing'},
  {key: 'Fashion', text: 'Fashion', value: 'Fashion'}
];

const AboutPage = ({ pristine, submitting, handleSubmit, updateProfile }) => {
  return (
    <Segment>
      <Header dividing size="large" content="About Me" />
      <Form onSubmit={handleSubmit(updateProfile)}>
        <Form.Group inline>
          <label>Tell us your status: </label>
          <Field name="status" component={RadioInput} type="radio" value="single" label="Single" />
          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="relationship"
            label="Relationship"
          />
          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="married"
            label="Married"
          />
        </Form.Group>
        <Divider />
        <label>Tell us about yourself</label>
        <Field name="about" component={TextArea} placeholder="About Me" />
        <Field
          name="interests"
          component={SelectInput}
          options={interests}
          value="interests"
          multiple={true}
          placeholder="Select your interests"
        />
        <Field
          width={8}
          name="occupation"
          type="text"
          component={TextInput}
          placeholder="Occupation"
        />
        <Field
          width={8}
          name="origin"
          options={{ types: ['(regions)'] }}
          component={PlaceInput}
          placeholder="Country of Origin"
        />
        <Divider />
        <Button disabled={pristine || submitting} size="large" positive content="Update Profile" />
      </Form>
    </Segment>
  );
};

export default reduxForm({ form: 'userProfile', enableReinitialize: true, destroyOnUnmount: false })(AboutPage);
