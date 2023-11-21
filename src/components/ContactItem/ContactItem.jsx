import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ contact, deleteContactItem }) => {
  return (
    <li className={css.item}>
      {contact.name}: {contact.number}
      <button
        className={css.button}
        type="button"
        onClick={() => deleteContactItem(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.objectOf({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  deleteContactItem: PropTypes.func,
};
