import React, { useState } from 'react'
import { Form, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({input, width, placeholder, meta: {touched, error}, ...rest}) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Form.Field error={touched && !!error}>
            <DatePicker
                {...rest}
                selected={startDate}
                onChange={date => setStartDate(date)}
                timeInputLabel='Time:'
                dateFormat='MM/dd/yyyy h:mm aa'
                showTimeInput
            />
            {touched && error &&<Label basic color='red'>{error}</Label>}
        </Form.Field>
    )
}
export default DateInput