import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import shop from './shop';
import './style.css';   
class App extends React.Component {
  constructor(){
    super();
    this.state={
      name:'Intra Shopping'
    };
  }
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.state.name}</h1>
        <ul>
          <li><a href="">Instagram</a></li>
          <li><a href="">WhatsApp</a></li>
          <li><a href="">Oculus</a></li>
        </ul>
      </div>
    );
  }
}
class App1 extends React.Component {
  constructor(){
    super();
    this.state={
      name:'Hack Shopping'
    };
  }
  render() {
    return (
      <div className="shopping-list2">
        <h1>Shopping List for {this.state.name}</h1>
        <ul>
          <li><a href="">Flipkart</a></li>
          <li><a href="">Amazon</a></li>
          <li><a href="">Ebay</a></li>
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
render(<App1 />, document.getElementById('external'));
