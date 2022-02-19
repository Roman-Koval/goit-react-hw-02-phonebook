import { Component } from "react";
import PropTypes from "prop-types";
import { Fragment } from "./ContactList.styled";
import ContactItem from "../ContactItem";


class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map((contact) => {
          return (
            <Fragment key={contact.id}>
              <ContactItem
                name={contact.name}
                number={contact.number}
                id={contact.id}
                onDeleteNumber={this.props.onDeleteContact}
              />
            </Fragment>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;