import React, { Component } from 'react';
import Header from './Header';
import VisibleList from './VisibleList';
import AsyncApp from './AsyncApp';

class App extends Component {
  render() {
    return (
      <div >
        <Header />
      <VisibleList />
      <AsyncApp />
      </div>
    );
  }
}

export default App;
