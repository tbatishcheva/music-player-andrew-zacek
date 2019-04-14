import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.module.css';

class Tab extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isActive: PropTypes.bool,
  };
  static defaultProps = {
    isActive: false,
  }

  render() {
    return (
      <div className={`${styles.tab} ${this.props.isActive ? styles.activeTab : ''}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Tab;
