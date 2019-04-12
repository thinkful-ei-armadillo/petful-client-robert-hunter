import React, { Component } from "react";
import UserContext from "../../components/context";
import Cat from "../../components/Cat/Cat";
import { Link } from "react-router-dom";

class adoptedCatList extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      cats: null
    };
  }

  componentDidMount() {
    this.setState({ cats: this.context.catList });
  }

  generateCatListHtml(list) {
    if (list) {
      return list.map(cat => <Cat cat={cat} />);
    }
  }

  render() {
    console.log(this.state.cats);
    console.log(this.context.catList);
    return (
      <>
        <h2>Cats who found their homes!</h2>
        {this.state.cats !== null
          ? this.generateCatListHtml(this.state.cats)
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

export default adoptedCatList;
