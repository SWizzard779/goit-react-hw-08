import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={styles.contact}>
      <p>{contact.name}: {contact.number}</p>
      <button onClick={onDelete} className={styles.button}>Delete</button>
    </li>
  );
};

export default Contact;

