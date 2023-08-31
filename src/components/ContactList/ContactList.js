import React, {useEffect} from 'react';
import styles from './ContactList.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getContacts, getDeletingId, getFilter} from "../../redux/selectors";
import {deleteContact, fetchContacts} from "../../redux/operations";

const getFilteredContacts = (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
};

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const deletingId = useSelector(getDeletingId);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    const filteredContacts = getFilteredContacts(filter, contacts);

    return (
        <>
            <ul className={styles.list}>
                {filteredContacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.name}: {contact.phone}
                        <button type="button"
                                disabled={+contact.id === +deletingId}
                                onClick={() => dispatch(deleteContact(contact.id))}>
                            {+contact.id === +deletingId ? 'Deleting...' : 'Delete'}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ContactList;