import React, { Component } from 'react';
import './App.scss';
import GroupList from '../Pages/GroupList/GroupList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
      </div>
    );
  }
}

export default App;
