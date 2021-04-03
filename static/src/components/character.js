import React from 'react';


class Character extends React.Component {
  constructor() {
    super();
    this.state = {details: []};
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchCharacter(id);
  }

  fetchCharacter(id) {
    const characterURL = 'http://localhost:5000/character/' + String(id);
    fetch(characterURL)
      .then(response => response.json())
      .then(result => {this.setState({details: result})});
  }

  getCharacterDetails() {
    const character = this.state.details;
    if (Array.isArray(character)) {
      return 'Character not found!';
    }
    const details = <div>
      <h2>
        {character.name}
      </h2>
      <p>
        Status: {character.status}<br/>
        Species: {character.species}<br/>
        Gender: {character.gender}<br/>
        Episode: {character.episode}
      </p>
    </div>;
    return details;
  }

  render() {
    if (this.state.details.length == 0) {
      return '';
    } else {
      return this.getCharacterDetails();
    }
  }
}

export default Character;
