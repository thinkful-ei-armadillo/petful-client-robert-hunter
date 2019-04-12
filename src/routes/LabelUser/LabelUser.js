import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../components/context";

export default class LabelUser extends Component {
  static contextType = UserContext;
  state = {
    readyToAdopt: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.context.setUser(e.target.userName.value);
    this.setState({ readyToAdopt: true });
  };

  render() {
    return (
      <div>
        <h2>Please enter a display name so we can add you to our wait list!</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" name="userName" required />
          {this.state.readyToAdopt !== true ? (
            <button type="submit">Submit</button>
          ) : (
            <button type="submit">Change UserName</button>
          )}
        </form>
        <br />
        <br />
        {this.state.readyToAdopt === true ? (
          <Link to={`/adoptionPage`} className="LinkToAdoptionPage">
            Let's Adopt!
          </Link>
        ) : null}
        <footer>
          <Link to={`/`} className="LinkToMainPage">
            PetFul Main Page
          </Link>
        </footer>
      </div>
    );
  }
}
