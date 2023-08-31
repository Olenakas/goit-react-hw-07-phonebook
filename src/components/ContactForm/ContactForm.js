import React, {useRef} from 'react';
import styles from './ContactForm.module.css';

import {useDispatch, useSelector} from "react-redux";
import {getContacts, getIsLoading} from "../../redux/selectors";
import {addContact} from "../../redux/operations";
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const contacts = useSelector(getContacts);
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();
    const formRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const phone = event.target[1].value;
        const existingContact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
        if (existingContact) {
            alert(`${name} is already in contacts.`);
        } else {
            dispatch(addContact({name, phone, formRef}));
        }
    };

    return (
            <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        required
                    />
                </label>
                <label>
                    Number:
                    <input
                        type="tel"
                        name="phone"
                        required
                    />
                </label>
                <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Add contact'}</button>
            </form>
    );
};

export default ContactForm;