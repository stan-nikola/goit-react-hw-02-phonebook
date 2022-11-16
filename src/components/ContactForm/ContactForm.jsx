import { Component } from 'react';

import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export class ContactForm extends Component {
  state = { name: '', number: '' };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    const nameArr = this.props.contactsArr.map(contact => contact.name);
    if (nameArr.includes(name)) {
      return alert('1111111');
    }
    this.props.onSubmit(name, number);

    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <PhoneInput
            inputProps={{
              name: 'number',
              required: true,
              autoFocus: true,
            }}
            type="tel"
            country={'ua'}
            value={this.state.number}
            onChange={number => this.setState({ number })}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
