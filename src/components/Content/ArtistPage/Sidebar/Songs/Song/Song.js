import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Song.module.css';

class Song extends Component {
  static propTypes = {
    song: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={styles.song}>
        <div className={styles.description}>
          <div className={styles.title}>{this.props.song.title}</div>
          <div className={styles.album}>{this.props.song.album}</div>
        </div>
        <div className={styles.duration}>{this.props.song.duration}</div>
      </div>
    );
  }
}

export default Song;
