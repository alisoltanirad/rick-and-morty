import React from 'react';


class Characters extends React.Component {
  constructor(props) {
    super(props);
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

  getFilters() {
    const form = <form onSubmit={this.parseQuery()}>
      <div id="form-status">
        <br/><b>Status</b><br/>
        <input type="checkbox" id="alive" name="status" value="Alive" />
        <label for="alive">  Alive</label><br/>
        <input type="checkbox" id="dead" name="status" value="Dead" />
        <label for="dead">  Dead</label><br/>
        <input type="checkbox" id="unknown" name="status" value="unknown" />
        <label for="unknown">  Unknown</label><br/>
      </div>
      <div id="form-submit">
        <br/><input type="submit" value="Submit" />
      </div>
    </form>;
    return form;
  }

  parseQuery() {
    const queryString = this.props.location.search;
    if (queryString.length == 0) {
      this.getAllCharacterCards([]);
    } else {
      const parameters = queryString.slice(1).split('&');
      this.getAllCharacterCards(parameters);
    }
  }

  filterResult(char, params) {
    if (params.length == 0) {
      return char
    } else {
      console.log(params[0].split('=')[1]);
      let filter = char == params[0].split('=')[1];
      if (params.length > 1) {
        for (const i = 1; i < params.length; i++) {
          filter = filter || char == params[i].split('=')[1];
        }
      }
      console.log(filter);
      return filter;
    }
  }

  getAllCharacterCards(parameters) {
    const filter = char => this.filterResult(char, parameters);
    const cardsDiv = <div>
      {
        this.state.characters.filter(filter).map(
          (character, index) => {
            return this.getCharacterCard(character);
          }
        )
      }
    </div>;

    return cardsDiv;
  }

  getPage() {
    const page = <div>
      <div class="row padding">
        <h2>Rick And Morty Characters</h2>
      </div>
      <div class="row">
        <div id="filter-menu" class="col-4 bg-light">
          <h4>Filters</h4>
          <div id="filters">
            {this.getFilters()}
          </div>
        </div>
        <div id="character-cards" class="col-8 bg-light">
          {this.getAllCharacterCards([])}
        </div>
      </div>
    </div>
    return page;
  }

  render() {
    if (this.state.characters.length == 0) {
      return '';
    } else {
      return this.getPage();
    }
  }
}

export default Characters;
