import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Components/Router.js'

import BusinessList from './Components/BusinessList/BusinessList.js'
import SearchBar from './Components/SearchBar/SearchBar.js'


const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [
  business, business, business, business, business, business
]

class App extends Component {
  render() {
    return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
     
    );
  }
}

export default App;
