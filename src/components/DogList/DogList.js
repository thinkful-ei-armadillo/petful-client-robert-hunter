import React, { Component } from 'react';
import Dog from '../Dog/Dog'
import Queue from '../../queue'
import { Link } from 'react-router-dom';

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogList: null,
      dogQueue: null
    }
  }
  getDogs() {
    return fetch('http://localhost:8080/api/dog')
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  }

  makeDogQueue(dogArray) {

    let dogQueue = new Queue();
    dogArray.map(dog => {
      if (!dog.adopted) {
        dogQueue.enqueue(dog);
      }
    })
    this.setState({
      dogQueue: dogQueue,
    })

  }

  componentDidMount() {

    this.getDogs().then(data => {
      this.makeDogQueue(data)
    })

  }

  generateDogListHtml(list) {
    if (list) {
      return <Dog dog={list.peek()} />
    }
  }
  adoptDog = () => {
    let newQueue = this.state.dogQueue;
    newQueue.dequeue();
    this.setState({
      dogQueue: newQueue,

    })
    if (newQueue !== null) {
      this.setState({
      })
    }
  }

  render() {

    return (
      <>
        {console.log((this.state.dogQueue) ? this.state.dogQueue.first : 'not working')}
        <h3>Adopt a dog</h3>
        {(this.state.dogQueue) ? (this.state.dogQueue.first !== null) ? this.generateDogListHtml(this.state.dogQueue) : 'Sorry, there are no more dogs to adopt ' : 'loading'}
        {(this.state.dogQueue) ? (this.state.dogQueue.first !== null) ? <button onClick={this.adoptDog}>Adopt Now!</button> : '' : ''}
        <Link to={'/adoptedDogList'}>View previously adopted dogs</Link>
      </>
    );
  }
}

export default DogList;

