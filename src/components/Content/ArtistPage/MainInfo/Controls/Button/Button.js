import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <button type="button" className={styles.button}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
