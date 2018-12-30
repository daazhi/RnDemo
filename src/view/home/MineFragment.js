import React from 'react';
import {Text, View} from 'react-native';

export default class MineFragment extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'index',
    };
  }

  render() {

    return (

      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <Text style={{margin: 50}}>mine</Text>

      </View>

    );
  }
}