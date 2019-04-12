import React, { Component } from "react";
import "./Dog.css";

class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="dog">
        <p>This is {this.props.dog.name}!</p>
        <div className="dogImageContainer">
          <img
            src={this.props.dog.imageURL}
            alt={this.props.dog.imageDescription}
          />
        </div>
        <p>{this.props.dog.sex}</p>
        <p>{this.props.dog.age} year(s) old</p>
        <p>Breed: {this.props.dog.breed}</p>
        <p>Past: {this.props.dog.story}</p>
        <p>
          Adopted By:
          <br />
          {this.props.dog.adoptedBy !== null
            ? this.props.dog.adoptedBy
            : "Still looking for an owner!"}
        </p>
      </div>
    );
  }
}

export default Dog;
