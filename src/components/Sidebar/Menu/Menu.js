import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.css';
import Title from './Title/Title';

class Menu extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={styles.container}>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </div>
    );
  }
}

export default Menu;
