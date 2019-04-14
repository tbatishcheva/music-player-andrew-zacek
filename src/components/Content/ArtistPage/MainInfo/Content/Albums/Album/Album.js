import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Album.module.css';

class Album extends Component {
  static propTypes = {
    album: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className={styles.album}>
        <img src={this.props.album.img} alt={this.props.album.name}/>
        <div className={styles.name}>{this.props.album.name}</div>
        <div className={styles.year}>{this.props.album.year}</div>
      </div>
    );
  }
}

export default Album;
