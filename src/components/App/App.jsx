import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactFormFormik } from 'components/ContactForm/ContactFormFormik';
// import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Box } from 'components/Box/Box';
import { Title, Message } from './App.styled';

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
  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };
  handleFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        minHeight={450}
        py={2}
        px={3}
        bg="primary"
        maxWidth={900}
        mx="auto"
        as="main"
        borderRadius="normal"
        mt={4}
        boxShadow="main"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Title>PhoneBook</Title>

          <ContactFormFormik
            onSubmit={this.addContact}
            contactsArr={this.state.contacts}
          />
        </Box>
        <Box>
          <Title>Contacts</Title>
          {this.state.contacts.length > 1 && (
            <Filter value={this.state.filter} onChange={this.handleFilter} />
          )}

          {this.state.contacts.length < 1 ? (
            <Message>There are no contacts in your phonebook</Message>
          ) : (
            <ContactList
              contacts={this.getVisibleContacts()}
              onDeleteContact={this.deleteContact}
            />
          )}
        </Box>
      </Box>
    );
  }
}
