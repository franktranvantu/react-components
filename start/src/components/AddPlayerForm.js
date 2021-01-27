import React, {Component} from "react";

class AddPlayerForm extends Component {

  state = {
    name: ''
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
          placeholder="Enter a player's name"
        />
        <input type="submit" value="Add Player"/>
      </form>
    );
  }
}

export default AddPlayerForm;