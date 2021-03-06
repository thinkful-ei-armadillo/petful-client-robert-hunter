import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainPage from "../../routes/MainPage/MainPage";
import AdoptionPage from "../../routes/AdoptionPage/AdoptionPage";
import LabelUser from "../../routes/LabelUser/LabelUser";
import adoptedDogList from "../../routes/AdoptedDogs/AdoptedDogs";
import adoptedCatList from "../../routes/AdoptedCats/AdoptedCats";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Adopt A Friend Today!</h1>
          <img
            className="down_arrow"
            alt="down arrow"
            src="https://user-images.githubusercontent.com/45447942/56050989-301c7580-5d02-11e9-99c1-b75ebadc2e46.png"
          />
        </header>
        <main className="App-main">
          <Route exact path={"/"} component={MainPage} className="MainPage" />
          <Route
            exact
            path={"/adoptionPage"}
            component={AdoptionPage}
            className="AdoptionPage"
          />
          <Route
            exact
            path={"/createDisplayName"}
            component={LabelUser}
            className="LabelUserPage"
          />
          <Route
            exact
            path={"/adoptedDogList"}
            component={adoptedDogList}
            className="adoptedDogListPage"
          />
          <Route
            exact
            path={"/adoptedCatList"}
            component={adoptedCatList}
            className="adoptedCatListPage"
          />
        </main>
      </div>
    );
  }
}

export default App;
