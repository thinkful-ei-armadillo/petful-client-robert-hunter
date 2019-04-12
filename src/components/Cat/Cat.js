import React, { Component } from "react";
import "./Cat.css";

class Cat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cat">
        <p>This is {this.props.cat.name}!</p>
        <div className="catImageContainer">
          <img
            src={this.props.cat.imageURL}
            alt={this.props.cat.imageDescription}
          />
        </div>
        <p>{this.props.cat.sex}</p>
        <p>{this.props.cat.age} year(s) old</p>
        <p>Breed: {this.props.cat.breed}</p>
        <p>Past: {this.props.cat.story}</p>
        <p>
          Adopted By:
          <br />
          {this.props.cat.adoptedBy !== null
            ? this.props.cat.adoptedBy
            : "Still looking for an owner!"}
        </p>
      </div>
    );
  }
}

export default Cat;
