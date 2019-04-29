import React, { Component } from "react";
import Dog from "../Dog/Dog";
import Queue from "../../queue";
import { Link } from "react-router-dom";
import UserContext from "../context";

class DogList extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      dogQueue: null
    };
  }
  getDogs() {
    return fetch("https://calm-springs-97882.herokuapp.com/api/dog").then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }

  makeDogQueue(dogArray) {
    let dogQueue = new Queue();
    dogArray.map(dog => {
      if (!dog.adopted) {
        dogQueue.enqueue(dog);
      } else {
        this.context.addToDogList(dog);
      }
    });
    this.setState({
      dogQueue: dogQueue
    });
  }

  componentDidMount() {
    this.getDogs().then(data => {
      this.makeDogQueue(data);
    });
  }

  generateDogListHtml(list) {
    if (list) {
      return <Dog dog={list.peek()} />;
    }
  }
  adoptDog = () => {
    let newQueue = this.state.dogQueue;
    let adoptedDog = newQueue.dequeue();
    adoptedDog.adoptedBy = this.context.user;
    this.context.addToDogList(adoptedDog);
    this.setState({
      dogQueue: newQueue
    });
    if (newQueue !== null) {
      this.setState({});
    }
  };

  render() {
    return (
      <>
        <h3>Adopt a dog</h3>
        {this.state.dogQueue
          ? this.state.dogQueue.first !== null
            ? this.generateDogListHtml(this.state.dogQueue)
            : "Sorry, there are no more dogs to adopt "
          : "loading"}
        {this.state.dogQueue ? (
          this.state.dogQueue.first !== null ? (
            <button onClick={this.adoptDog}>Adopt Now!</button>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        <br />
        <br />
        <Link to={"/adoptedDogList"}>View previously adopted dogs</Link>
      </>
    );
  }
}

export default DogList;
