import React, { Component } from 'react';
import Header from '../components/Header';
import Solutions from '../components/Solutions';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import '../scss/App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Solutions/>
        <Clients/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
