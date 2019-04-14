import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

class Title extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

export default Title;
