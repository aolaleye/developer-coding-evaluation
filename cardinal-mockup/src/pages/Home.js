import React, { Component } from 'react';
import Header from '../components/Header';
import Solutions from '../components/Solutions';
import Clients from '../components/Clients';
import Work from '../components/Work';
import Connect from '../components/Connect';
import Footer from '../components/Footer';
import '../scss/Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Solutions/>
        <Clients/>
        <Work/>
        <Connect/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
