import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import css from './Contact.module.css';
export const Contacts = ({ contacts, deleteContactItem }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContactItem={deleteContactItem}
          />
        );
      })}
    </ul>
  );
};
Contacts.propTypes = {
  // contacts: PropTypes
  //   .arrayOf
  //   PropTypes.objectOf({
  //     id: PropTypes.string,
  //     name: PropTypes.string,
  //     number: PropTypes.string,
  //   })
  //   (),
  deleteContactItem: PropTypes.func,
};
