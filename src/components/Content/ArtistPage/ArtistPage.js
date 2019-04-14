import React, { Component } from 'react';
import ColorThief from 'color-thief-browser';
import invert from 'invert-color';
import styles from './ArtistPage.module.css';
import Header from './Header/Header';
import MainInfo from './MainInfo/MainInfo';
import Sidebar from './Sidebar/Sidebar';

class ArtistPage extends Component {
  state = {
    background: '',
    textColor: '',
  };

  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      const [r, g, b] = (new ColorThief()).getColor(img);
      const background = `rgb(${r}, ${g}, ${b})`;
      const textColor = invert({ r, g, b }, true);
      const bgWidth = `${img.width}px`;
      const bgHeight = `${img.height}px`;

      this.setState({
        background,
        textColor,
        bgWidth,
        bgHeight,
      });
    };
    img.src = this.props.artist.img;
  }

  render() {
    if (!this.state.background) {
      return null;
    }

    return (
      <div className={styles.bg} style={{ '--bg-width': this.state.bgWidth, '--bg-height': this.state.bgHeight, '--bg-color': this.state.background, '--text-color': this.state.textColor, background: `url(${this.props.artist.img}) top right no-repeat, var(--bg-color)` }}>
        <div className={styles.container}>
          <Header />
          <MainInfo artist={this.props.artist} />
          <Sidebar songs={this.props.artist.songs} />
        </div>
      </div>
    );
  }
}

export default ArtistPage;
