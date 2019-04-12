import React, { Component } from 'react';

class Cat extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className = "cat">

        <p>{this.props.cat.name}</p>
        <img src = {this.props.cat.imageURL} alt = {this.props.cat.imageDescription} />
        <p>{this.props.cat.sex}</p>
        <p>{this.props.cat.age}</p>
        <p>{this.props.cat.breed}</p>
        <p>{this.props.cat.story}</p>
      </div>
     );
  }
}
 
export default Cat;