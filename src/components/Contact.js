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

    return (
        <div>
            <h2>Contact Me!</h2>
            <form className='contact-form'>
                <label className='label' for='name'>Name</label>
                <input
                    value={firstName}
                    name='firstName'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Name'
                />
                <label className='label' for='email'>Email</label>
                <input
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    type='email'
                    placeholder='Email'
                />
                <label className='label' for='message'>Message</label>
                <input
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Message'
                />
                <button type='button' onClick={handleFormSubmit}>
                    SUBMIT
                </button>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Contact;
