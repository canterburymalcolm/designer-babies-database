import React from 'react';
import { connect } from 'react-redux';
import Form from '../inputs/form';
import TextInput from '../inputs/text-input';
import SelectInput from '../inputs/select-input';
import { addUser } from '../client';
import { STATES } from '../../constants';
import { setUser, nextPage } from '../../redux/actions';

const SignUp = ({ curUser, setUser, nextPage }) => {
    return (
        <Form
            className="sign-up"
            onSubmit={(user) => {
                addUser({...curUser, ...user}, id => {
                    setUser({ id: id });
                });
                nextPage();
            }}
            >
            <TextInput
                name="email"
                desc="Email address"
                isEmail={true}
            />
            <TextInput
                name="street"
                desc="Street address"
                placeholder="Your street address"
            />
            <TextInput
                name="city"
                desc="City"
                placeholder="City"
            />
            <SelectInput
                name='state'
                desc='State'
                placeholder='MA'
                options={STATES}
            />
            <TextInput
                name="zip"
                desc="Zip"
                placeholder={'02115'}
                isNumber={true}
            />
        </Form>
    )
}

export default connect(
    state => ({ curUser: state.user }),
    { setUser, nextPage }
)(SignUp);