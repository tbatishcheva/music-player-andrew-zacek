import React, { Component } from 'react';
import styles from './MainInfo.module.css';
import Controls from './Controls/Controls';
import Name from './Name/Name';
import Tabs from './Tabs/Tabs';
import Tab from './Tabs/Tab/Tab';
import Content from './Content/Content';
import Albums from './Content/Albums/Albums';

class MainInfo extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Controls />
        <Name>
          {this.props.artist.name}
        </Name>
        <div className={styles.tabsWrapper}>
          <Tabs>
            <Tab isActive>Albums</Tab>
            <Tab>About</Tab>
            <Tab>Related artists</Tab>
          </Tabs>
        </div>
        <Content>
          <Albums albums={this.props.artist.albums} />
        </Content>
      </div>
    );
  }
}

export default MainInfo;
