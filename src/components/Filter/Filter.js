import { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import { FilterLabel, FilterInput } from './Filter.styled';


class Filter extends Component {
  inputFilterId = shortid.generate();

  render() {
    return (
      <FilterLabel htmlFor="filter">
        Find contacts by name:
        <FilterInput
          onChange={this.props.onFilter}
          type="text"
          value={this.props.filter}
        />
      </FilterLabel>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};

export default Filter;
