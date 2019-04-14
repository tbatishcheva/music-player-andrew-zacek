import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Submenu.module.css';

class Submenu extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    return (
      <div className={styles.submenu}>
        {this.props.children}
      </div>
    );
  }
}

export default Submenu;
