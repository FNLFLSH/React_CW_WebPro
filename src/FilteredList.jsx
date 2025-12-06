import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      type: "All"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  onFilter = (event) => {
    this.setState({type: event});
  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
      const matchesSearch = item.name.toLowerCase().search(this.state.search) !== -1;
      const matchesType = this.state.type === "All" || item.type === this.state.type;
      return matchesSearch && matchesType;
  }

  render(){
    return (
        <div className = "filter-list">
          <h2>Produce Filter</h2>
          <div className="filter-controls">
            {/*TODO (FilteredList): Create a Dropdown Menu with three different menu options: Fruit, Vegetables, and All*/}
            <Dropdown onSelect={this.onFilter}>
              <Dropdown.Toggle variant="primary" id="filter-dropdown">
                {this.state.type}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
                <Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <input type = "text" placeholder = "Search produce..." onChange = {this.onSearch} />
          </div>
          <List items = {this.props.items.filter(this.filterItem)} />
        </div>
    );
  }
}

export default FilteredList;
