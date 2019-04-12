import React, { Component } from "react";

const UserContext = React.createContext({
  user: null,
  catList: [],
  dogList: [],
  setUser: () => {},
  addToCatList: () => {},
  addToDogList: () => {}
});

export default UserContext;

export class UserProvider extends Component {
  state = {
    user: null,
    catList: [],
    dogList: []
  };

  setUser = user => {
    this.setState({ user });
  };

  addToCatList = cat => {
    let newCatList = this.state.catList;
    this.setState({ catList: [...newCatList, cat] });
  };

  addToDogList = dog => {
    let newDogList = this.state.dogList;
    this.setState({ dogList: [...newDogList, dog] });
  };

  render() {
    const value = {
      user: this.state.user,
      catList: this.state.catList,
      dogList: this.state.dogList,
      setUser: this.setUser,
      addToCatList: this.addToCatList,
      addToDogList: this.addToDogList
    };
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
