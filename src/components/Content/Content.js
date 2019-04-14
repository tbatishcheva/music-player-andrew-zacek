import React, { Component } from 'react';
import styles from './Content.module.css';
import ArtistPage from './ArtistPage/ArtistPage';
import album from './album.png';
import artist from './artist.png';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [
        {
          id: 1,
          name: 'Gorillaz',
          img: artist,
          albums: [
            {
              name: 'Plastic Beach',
              year: 2010,
              img: album,
            },
            {
              name: 'Plastic Beach',
              year: 2010,
              img: album,
            },
            {
              name: 'Plastic Beach',
              year: 2010,
              img: album,
            },
            {
              name: 'Plastic Beach',
              year: 2010,
              img: album,
            },
            {
              name: 'Plastic Beach',
              year: 2010,
              img: album,
            },
          ],
          songs: [
            {
              title: 'Feel Good Inc',
              album: 'Plastic',
              duration: '3:53',
            },
            {
              title: 'Feel Good Inc',
              album: 'Plastic',
              duration: '3:53',
            },
            {
              title: 'Feel Good Inc',
              album: 'Plastic',
              duration: '3:53',
            },
            {
              title: 'Feel Good Inc',
              album: 'Plastic',
              duration: '3:53',
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <ArtistPage artist={this.state.artists[0]} />
      </div>
    );
  }
}

export default Content;
