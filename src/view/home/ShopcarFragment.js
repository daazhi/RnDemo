import React from 'react';
import {Text, View} from 'react-native';

export default class ShopcarFragment extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <Text style={{margin: 50}}>shopcar</Text>
      </View>

    );
  }
}