import React from 'react';
import css from './FormContact.module.css';
import PropTypes from 'prop-types';

export class FormContact extends React.Component {
  state = {
    name: '',
    number: '',
  };

  // Відповідає за оновлення стану
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Викликається під час відправлення форми
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form} action="">
        <label className={css.label} htmlFor="name">
          Name
        </label>

        <input
          type="text"
          name="name"
          required
          value={this.state.name}
          onChange={event => this.handleChange(event)}
          id="name"
          className={css.input}
        />
        <label className={css.label} htmlFor="number">
          Number
        </label>

        <input
          type="tel"
          name="number"
          required
          value={this.state.number}
          onChange={event => this.handleChange(event)}
          id="number"
          className={css.input}
        />

        <button className={css.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
FormContact.propTypes = {
  onSubmit: PropTypes.func,
};
