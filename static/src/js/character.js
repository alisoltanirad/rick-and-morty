import React from 'react';

class Character extends React.Component {
  constructor() {
    super();
    this.state = {name: "Name"};
  }
  render() {
    return <p>test {this.state.name}</p>;
  }
}

class Characters extends React.Component {
  constructor() {
    super();
    this.state = {characters: []};
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters() {
    const charactersURL = 'http://localhost:5000';
    fetch(charactersURL)
      .then(response => response.json())
      .then(result => {this.setState({characters: result.characters})});
  }

  render() {
    const {characters} = this.state;
    return characters;
  }
}

export default Characters;
