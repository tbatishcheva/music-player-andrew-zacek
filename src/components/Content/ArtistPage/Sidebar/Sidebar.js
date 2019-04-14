import React, { Component } from 'react';
import styles from './Sidebar.module.css';
import Title from './Title/Title';
import Songs from './Songs/Songs';

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Title>Random Selection</Title>
        </div>
        <Songs songs={this.props.songs} />
      </div>
    );
  }
}

export default Sidebar;
