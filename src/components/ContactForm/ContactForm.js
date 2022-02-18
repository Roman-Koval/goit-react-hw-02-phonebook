import { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import { FormWrap, Label } from './ContactForm.styled';


class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  inputNameId = shortid.generate();
  inputTelId = shortid.generate();

  findCurrentValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addContact = (e) => {
    e.preventDefault();
    this.props.filterContact.find(
      (contact) => contact.name.toLowerCase() === this.state.name.toLowerCase()
    )
      ? alert(`${this.state.name} is already in contacts`)
      : this.props.onAdd(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <FormWrap onSubmit={this.addContact}>
        <Label htmlFor={this.inputNameId}>
          Name
          <input
            onChange={this.findCurrentValue}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
        </Label>
        <Label htmlFor={this.inputTelId}>
          Number
          <input
            onChange={this.findCurrentValue}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.inputTelId}
          />
        </Label>
        <button type="submit">
          Add contact
        </button>
      </FormWrap>
    );
  }
}

ContactForm.propTypes = {
  filterContact: PropTypes.array,
  onAdd: PropTypes.func,
};

export default ContactForm;
