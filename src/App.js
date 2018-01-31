import React, { Component } from 'react';
import Header from './Header';
import VisibleList from './VisibleList';

class App extends Component {
  render() {
    return (
      <div >
        <Header />
      <VisibleList />
      </div>
    );
  }
}

export default App;
