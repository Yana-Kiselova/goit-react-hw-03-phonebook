import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onSearch }) => {
  return (
    <>
      <label htmlFor="search" className={css.label}>
        Find
      </label>
      <input
        className={css.input}
        type="text"
        name="search"
        id="search"
        onChange={event => onSearch(event)}
      />
    </>
  );
};
Filter.propTypes = {
  onSearch: PropTypes.func,
};
