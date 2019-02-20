import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContacts from './ListContacts';



const contacts = [
  {
    id : 'adam',
    name : 'Adam Jhenson',
    email : '@adamJh',
    avatar : 'cristiano-ronaldo-icon.png'
  },
  {
    id : 'iqbal',
    name : 'Iqbal Ahmed',
    email : '@iaq',
    avatar : 'pic.jpg'
  },
  {
    id : 'karen',
    name : 'Karen Woodwar',
    email : '@kreanwod',
    avatar : 'pic.jpg'
  },

 
]





class App extends Component {
  render() {
    return (
      <div>
        <ListContacts   contacts={contacts}/>
      </div>
    );
  }
}

export default App;
