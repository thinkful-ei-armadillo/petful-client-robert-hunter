import React, { Component } from "react";
import UserContext from "../../components/context";
import Dog from "../../components/Dog/Dog";
import { Link } from "react-router-dom";

class adoptedDogList extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      dogs: null
    };
  }

  componentDidMount() {
    this.setState({ dogs: this.context.dogList });
  }

  generateDogListHtml(list) {
    if (list) {
      return list.map(dog => <Dog dog={dog} />);
    }
  }

  render() {
    console.log(this.state.dogs);
    console.log(this.context.dogList);
    return (
      <>
        <h2>Dogs who found their homes!</h2>
        {this.state.dogs !== null
          ? this.generateDogListHtml(this.state.dogs)
          : null}
        <footer>
          <Link to={`/`} className="LinkToMainPage">
            PetFul Main Page
          </Link>
        </footer>
      </>
    );
  }
}

export default adoptedDogList;
