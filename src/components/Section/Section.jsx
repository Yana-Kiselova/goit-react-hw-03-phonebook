import React from 'react';
import PropTypes from 'prop-types';
export const Section = ({ children, title }) => {
  return (
    <section>
      {title ? <h2>{title}</h2> : null}
      {children}
    </section>
  );
};
Section.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
};
