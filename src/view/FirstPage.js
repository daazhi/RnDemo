import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
export default class FirstPage extends Component {
  static navigationOptions = {
    title: 'page 1',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is First Page!
        </Text>
        <TouchableOpacity
          onPress={()=>{
            navigate('page2',{message:'Hello,我是page1！'});
          }}
        >
          <Text style={styles.textView}>
            Go to second page
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{
            navigate('page3',{message:'Hello,我是page1！'});
          }}
        >
          <Text style={styles.textView}>
            Go to third page
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{
            navigate('page4',{message:'Hello,我是page1！'});
          }}
        >
          <Text style={styles.textView}>
            Go to fourth page
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textView: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color:'red'
  },
});