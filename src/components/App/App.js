import React, { Component } from 'react';
import styles from './App.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import Player from '../Player/Player';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Sidebar />
        <Content />
        <Player />
      </div>
    );
  }
}

export default App;
