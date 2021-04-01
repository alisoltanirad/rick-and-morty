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
  }
  render() {
    return <Character />;
  }
}

export default Characters;
