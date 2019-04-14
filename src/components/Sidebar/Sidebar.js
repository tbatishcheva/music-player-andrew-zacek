import React, { Component } from 'react';
import styles from './Sidebar.module.css';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Submenu from './Menu/Submenu/Submenu';
import Item from './Menu/Item/Item';

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Logo />
        <div className={styles.menuWrapper}>
          <div className={styles.main}>
            <Menu title="Music">
              <Submenu>
                <Item>Discover</Item>
                <Item>Rising</Item>
                <Item>Inspiration</Item>
                <Item>My stars</Item>
              </Submenu>
              <Submenu>
                <Item>Songs</Item>
                <Item>Artists</Item>
                <Item>Albums</Item>
                <Item>Radio</Item>
              </Submenu>
            </Menu>
          </div>
          <div className={styles.playlists}>
            <Menu title="Playlists">
              <Submenu>
                <Item>UPlabs focus</Item>
                <Item>Golden 80s</Item>
                <Item>Gaming OSTs</Item>
                <Item>Smash it!</Item>
              </Submenu>
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
