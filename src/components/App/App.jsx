import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactFormFormik } from 'components/ContactForm/ContactFormFormik';
// import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Box } from 'components/Box/Box';
import { Title, SupTitle, Message } from './App.styled';
import data from '../../data/data.json';

export class App extends Component {
  state = {
    contacts: data,
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
        gridGap={30}
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
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          as="section"
        >
          <Title>PhoneBook</Title>

          <ContactFormFormik
            onSubmit={this.addContact}
            onChange={this.state.contacts}
            contactsArr={this.state.contacts}
          />
        </Box>
        <Box as="section">
          <SupTitle>Contacts</SupTitle>
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
