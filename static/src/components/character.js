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

export default Character;
