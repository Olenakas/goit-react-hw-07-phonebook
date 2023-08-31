import React from 'react';
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../ContactFilter/ContactFilter";
import styles from './App.module.css';
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <div className={styles.container}>
            <h1>Phonebook</h1>
            <ContactForm/>
            <h2>Contacts</h2>
            <Filter/>
            <ContactList/>
            <ToastContainer/>
        </div>
    );
};

export default App;