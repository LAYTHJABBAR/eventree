import React, {Component} from 'react';
import {Segment, Form, Header, Divider, Button, Icon} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import moment from 'moment';
import DateInput from "../../../app/common/form/DateInput";
import PlaceInput from "../../../app/common/form/PlaceInput";
import TextInput from "../../../app/common/form/TextInput";
import RadioInput from "../../../app/common/form/RadioInput";


class BasicPage extends Component {

    render() {
        const {pristine, submitting, handleSubmit, updateProfile} = this.props;
        return (
            <Segment>
                <Header dividing size='large' content='User Profile' />
                <Form onSubmit={handleSubmit(updateProfile)}>
                    <Field
                        width={8}
                        name='displayName'
                        type='text'
                        component={TextInput}
                        placeholder='Known As'
                    />
                    <Form.Group inline>
                      <label>Gender: </label>
                      <Field 
                        name='gender'
                        type='radio'
                        value='male'
                        label={<Icon name='mars'/>}
                        component={RadioInput}
                      />
                      <Field 
                        name='gender'
                        type='radio'
                        value='female'
                        label={<Icon name='venus'/>}
                        component={RadioInput}
                      />
                        <Field 
                        name='gender'
                        type='radio'
                        value='Other'
                        label={<Icon name='transgender alternate'/>}
                        component={RadioInput}
                      />
                    </Form.Group>
                    <Field
                        width={8}
                        name='dateOfBirth'
                        component={DateInput}
                        placeholder='Date of Birth'
                        dateFormat='yyyy-MM-dd'
                        showYearDropdown={true}
                        monthDropDown={true}
                        dropDowonMode='select'
                        maxdate={moment().subtract(18, 'years')}
                    />
                    <Field
                        name='city'
                        placeholder='Home Town'
                        options={{types: ['(cities)']}}
                        component={PlaceInput}
                        width={8}
                    />
                    <Divider/>
                    <Button disabled={pristine || submitting} size='large' positive content='Update Profile'/>
                </Form>
            </Segment>
        );
    }
}

export default reduxForm({form: 'userProfile', enableReinitialize: true, destroyOnUnmount: false})(BasicPage);  
