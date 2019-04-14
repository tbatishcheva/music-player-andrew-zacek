import React, { Component } from 'react';
import styles from './Controls.module.css';
import Button from './Button/Button';

class Controls extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Button>Save to My stars</Button>
      </div>
    );
  }
}

export default Controls;
