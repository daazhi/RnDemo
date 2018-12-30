import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window');

const createFloor = (name) => {
  return (
    <View style={{alignItem: 'center'}}>
      <Text>{name}</Text>
    </View>
  );
}

export default class IndexFragment extends React.Component {

  render() {
    return (
      <ScrollView contentContainerStyle={{paddingVertical: 10}}>

        <Swiper style={styles.wrapper} height={240} autoplay
                onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                dot={<View style={{
                  backgroundColor: 'rgba(0,0,0,.5)',
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}/>}
                activeDot={<View style={{
                  backgroundColor: 'yellow',
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3
                }}/>}
                paginationStyle={{
                  bottom: 10, left: 10, right: 10
                }}

                loop>
          <View style={styles.slide}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/1.png')}/>
          </View>
          <View style={styles.slide}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/2.png')}/>
          </View>
          <View style={styles.slide}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/3.png')}/>
          </View>
          <View style={styles.slide}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/4.png')}/>
          </View>
        </Swiper>

        {createFloor('123')}
        {createFloor('456')}
        {createFloor('123')}
        {createFloor('456')}
        {createFloor('123')}
        {createFloor('456')}
        {createFloor('123')}
        {createFloor('456')}
        {createFloor('123')}
        {createFloor('456')}
        {createFloor('123')}
        {createFloor('456')}
        {createFloor('123')}
        {createFloor('456')}
        {createFloor('123')}
        {createFloor('456')}
        {createFloor('123')}
        {createFloor('456')}
        {createFloor('123')}
        {createFloor('456')}
        {createFloor('123')}
        {createFloor('456')}
        {createFloor('123')}
        {createFloor('456')}
        {createFloor('123')}
        {createFloor('456')}

      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width: width,
    flex: 1
  }
});
