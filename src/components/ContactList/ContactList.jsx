import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts, selectIsLoading, selectError } from '../../redux/contacts/slice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={styles.contactList}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={() => dispatch(deleteContact(contact.id))}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
