import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContactToList = newContact => {
    const isNameRepeat = this.state.contacts.some(
      contact => contact.name === newContact.name
    );
    if (isNameRepeat) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    const contact = { ...newContact, id: nanoid() };
    this.setState(prev => {
      return { contacts: [...prev.contacts, contact] };
    });
  };

  searchContactByName = e => {
    const name = e.currentTarget.value;
    this.setState({ filter: name });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(item => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onAdd={this.handleAddContactToList}
          checkName={this.isNameRepeat}
        />
        <h2>Contacts</h2>
        <Filter searchContact={this.searchContactByName} />
        <ContactList
          contacts={visibleContacts}
          deleteCard={this.deleteContact}
        />
      </div>
    );
  }
}
