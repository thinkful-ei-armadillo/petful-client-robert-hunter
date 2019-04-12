import React, { Component } from "react";
import { Link } from "react-router-dom";
import CatList from '../../components/CatList/CatList';
import DogList from '../../components/DogList/DogList'

export default class MainPage extends Component {
  render() {
    return (
      <div className="MainPageInfo">
        <h3>Cats</h3>
        <CatList />
        <h3>Dogs</h3>
        <DogList />
        <Link to={`/`} className="LinkToMainPage">
          Go back to main page
        </Link>
      </div>
    );
  }
}
