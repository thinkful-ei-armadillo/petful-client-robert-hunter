import React, { Component } from 'react';

class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="dog">

        <p>{this.props.dog.name}</p>
        <img src={this.props.dog.imageURL} alt={this.props.dog.imageDescription} />
        <p>{this.props.dog.sex}</p>
        <p>{this.props.dog.age}</p>
        <p>{this.props.dog.breed}</p>
        <p>{this.props.dog.story}</p>
      </div>
    );
  }
}

export default Dog;