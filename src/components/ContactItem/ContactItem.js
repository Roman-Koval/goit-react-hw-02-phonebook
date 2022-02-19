import { Component } from "react";
import PropTypes from "prop-types";


class ContactItem extends Component {
  render() {
    return (
      <li>
        <span>{`${this.props.name}:`}</span>
        <span>{this.props.number}</span>
        <button type="submit" onClick={() => this.props.onDeleteNumber(this.props.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteNumber: PropTypes.func,
};

export default ContactItem;