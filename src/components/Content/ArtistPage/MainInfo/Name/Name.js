import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Name.module.css';

class Name extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={styles.name}>
        {this.props.children}
      </div>
    );
  }
}

export default Name;
