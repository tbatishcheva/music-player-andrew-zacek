import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Songs.module.css';
import Song from './Song/Song';

class Songs extends Component {
  static propTypes = {
    songs: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className={styles.container}>
        {this.props.songs.map(song => <Song song={song} />)}
      </div>
    );
  }
}

export default Songs;
