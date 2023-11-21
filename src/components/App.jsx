import React from 'react';
import { FormContact } from './FormContact/FormContact';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('key')) || [];
    this.setState({ contacts: contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('key', JSON.stringify(this.state.contacts));
    }
  }

  formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => {
      if (contacts.some(contact => contact.name === name)) {
        return alert(`${name} is already in contacts!`);
      }
      return {
        contacts: [contact, ...contacts],
      };
    });
  };

  onSearch = e => {
    this.setState({ filter: e.target.value });
  };

  filteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  deleteContactItem = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="conteiner">
        <Section title={'Phonebook'}>
          <FormContact onSubmit={this.formSubmit} />
        </Section>
        <Section title={'Contacts'}>
          <Filter onSearch={this.onSearch} />
          <Contacts
            contacts={this.filteredContacts()}
            deleteContactItem={this.deleteContactItem}
          />
        </Section>
      </div>
    );
  }
}
