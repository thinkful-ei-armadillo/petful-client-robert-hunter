import React, { Component } from "react";
import { Link } from "react-router-dom";
import CatList from "../../components/CatList/CatList";
import DogList from "../../components/DogList/DogList";
import Split from "../../components/Split/Split";
import "./AdoptionPage.css";

export default class MainPage extends Component {
  render() {
    return (
      <div className="AdoptionPageInfo">
        <Split className="cats">
          <h3>Cats</h3>
          <CatList />
        </Split>
        <Split className="dogs">
          <h3>Dogs</h3>
          <DogList />
        </Split>
        <footer>
          <Link to={`/`} className="LinkToMainPage">
            PetFul Main Page
          </Link>
        </footer>
      </div>
    );
  }
}
