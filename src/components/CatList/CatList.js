import React, { Component } from 'react';
import Cat from '../Cat/Cat'
import Queue from '../../queue'
import {Link} from 'react-router-dom';

class CatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catList: null,
      catQueue: null
    }
  }
  getCats() {
    return fetch('http://localhost:8080/api/cat')
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  }

  makeCatQueue(catArray) {

    let catQueue = new Queue();
    catArray.map(cat => {
      if(!cat.adopted) {
        catQueue.enqueue(cat);
      }
    })
    this.setState({
      catQueue: catQueue,
    })

  }

  componentDidMount() {
    
    this.getCats().then(data => {
      this.makeCatQueue(data)
    })
    
  }

  generateCatListHtml(list) {
  if (list) {
    return <Cat cat={list.peek()} />
  }
  }
  adoptCat = () => {
    let newQueue = this.state.catQueue;
    newQueue.dequeue();
    this.setState({
      catQueue: newQueue,
      
    })
    if (newQueue !== null) {
      this.setState({
      })
    }
  }

  render() { 
    
    return (
      <>
        {console.log((this.state.catQueue) ? this.state.catQueue.first : 'not working')}
        <h3>Adopt a cat</h3>
        {(this.state.catQueue) ? (this.state.catQueue.first !== null) ? this.generateCatListHtml(this.state.catQueue) : 'Sorry, there are no more cats to adopt ' : 'loading'}
        {(this.state.catQueue) ? (this.state.catQueue.first !== null) ? <button onClick = {this.adoptCat}>Adopt Now!</button> : '' : ''}
        <Link to ={'/adoptedCatList'}>View previously adopted cats</Link>
      </>
      );
  }
}
 
export default CatList;

