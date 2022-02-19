import React, { Component } from "react";
import shortid from "shortid";

import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";



class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addNewContact = (person) => {
    const contact = {
      id: shortid.generate(),
      name: person.name,
      number: person.number,
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  findFilterValue = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  removeContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((pers) => pers.id !== id),
    }));
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const filterCurrentTel = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          filterContact={filterCurrentTel}
          onAdd={this.addNewContact}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onFilter={this.findFilterValue} />
        <ContactList
          contacts={filterCurrentTel}
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;