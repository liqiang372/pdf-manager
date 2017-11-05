import './App.scss';
import React, { Component } from 'react';
import Sidebar from './Sidebar'; 
import Browser from './Browser';
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <Browser />
      </div>
    );
  }
}

export default App;
