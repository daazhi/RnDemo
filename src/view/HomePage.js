import React from 'react';
import {Text, View} from 'react-native';
import {Icon, SearchBar, TabBar} from '@ant-design/react-native';

export default class HomePage extends React.Component {

  static navigationOptions = {
    // title: 'page 1',
    // headerStyle: {backgroundColor: '#f00',},
    // headerTintColor: "#ff0",
    // headerTitleStyle: {fontWeight: 'bold',}
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }

  renderContent(pageText, zIndex) {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white', zIndex: zIndex}}>
        <SearchBar placeholder={pageText} showCancelButton/>
        <Text style={{margin: 50}}>{pageText}</Text>
      </View>
    );
  }

  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5"
      >
        <TabBar.Item
          title="Life"
          icon={<Icon name="home"/>}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => this.onChangeTab('blueTab')}
        >
          {this.renderContent('Life Tab', 4)}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="ordered-list"/>}
          title="Koubei"
          badge={2}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => this.onChangeTab('redTab')}
        >
          {this.renderContent('Koubei Tab', 5)}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="like"/>}
          title="Friend"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => this.onChangeTab('greenTab')}
        >
          {this.renderContent('Friend Tab', 4)}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user"/>}
          title="My"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => this.onChangeTab('yellowTab')}
        >
          {this.renderContent('My Tab', 1)}
        </TabBar.Item>
      </TabBar>
    );
  }
}