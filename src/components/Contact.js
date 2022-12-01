import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers'
function Contact() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'firstName') {
            setFirstName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !firstName) {
            setErrorMessage('Email or name is invalid');

            return;
        }

        if (!setMessage(message)) {
            setErrorMessage('Message is required');

            return;
        }

        setFirstName('');
        setEmail('');
        setMessage('')
    }

}

export default Contact;

// Requirements
    // name
    // email
    // message
    // notification that field is required
    // validate email adress