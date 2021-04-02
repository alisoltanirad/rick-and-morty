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

  getCharacterCard(character) {
    const card = <div class="card">
      <div class="card-body">
        <p>
          Name: {character.name}<br/>
          Status: {character.status}<br/>
          Species: {character.species}<br/>
          Gender: {character.gender}<br/>
          Episode: {character.episode}
        </p>
      </div>
    </div>;
    return card;
  }

  getAllCharacterCards() {
    const cardsDiv = <div>
      {
        this.state.characters.map(
          (character, index) => {
            return this.getCharacterCard(character);
          }
        )
      }
    </div>

    return cardsDiv
  }

  render() {
    if (this.state.characters.length == 0) {
      return '';
    } else {
      const characterCards = this.getAllCharacterCards();
      return characterCards;
    }
  }
}

export default Characters;
