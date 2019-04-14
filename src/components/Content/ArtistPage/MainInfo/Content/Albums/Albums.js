import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Albums.module.css';
import Album from './Album/Album';

class Albums extends Component {
  static propTypes = {
    albums: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className={styles.container}>
        {this.props.albums.map(album => (
          <Album album={album} />
        ))}
      </div>
    );
  }
}

export default Albums;
