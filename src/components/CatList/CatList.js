import React, { Component } from "react";
import Cat from "../Cat/Cat";
import Queue from "../../queue";
import { Link } from "react-router-dom";
import UserContext from "../context";

class CatList extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      catQueue: null
    };
  }
  getCats() {
    return fetch("https://calm-springs-97882.herokuapp.com/api/cat").then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }

  makeCatQueue(catArray) {
    let catQueue = new Queue();
    catArray.map(cat => {
      if (!cat.adopted) {
        catQueue.enqueue(cat);
      } else {
        this.context.addToCatList(cat);
      }
    });
    this.setState({
      catQueue: catQueue
    });
  }

  componentDidMount() {
    this.getCats().then(data => {
      this.makeCatQueue(data);
    });
  }

  generateCatListHtml(list) {
    if (list) {
      return <Cat cat={list.peek()} />;
    }
  }
  adoptCat = () => {
    let newQueue = this.state.catQueue;
    let adoptedCat = newQueue.dequeue();
    adoptedCat.adoptedBy = this.context.user;
    this.context.addToCatList(adoptedCat);
    this.setState({
      catQueue: newQueue
    });
    if (newQueue !== null) {
      this.setState({});
    }
  };

  render() {
    return (
      <>
        <h3>Adopt a cat</h3>
        {this.state.catQueue
          ? this.state.catQueue.first !== null
            ? this.generateCatListHtml(this.state.catQueue)
            : "Sorry, there are no more cats to adopt "
          : "loading"}
        {this.state.catQueue ? (
          this.state.catQueue.first !== null ? (
            <button onClick={this.adoptCat}>Adopt Now!</button>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        <br />
        <br />
        <Link to={"/adoptedCatList"}>View previously adopted cats</Link>
      </>
    );
  }
}

export default CatList;
