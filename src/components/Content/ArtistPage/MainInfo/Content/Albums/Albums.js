import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Album.module.css';

class Album extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.container}/>
    );
  }
}

export default Album;
