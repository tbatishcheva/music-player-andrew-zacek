import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';

class Item extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    return (
      <div className={styles.item}>
        {this.props.children}
      </div>
    );
  }
}

export default Item;
