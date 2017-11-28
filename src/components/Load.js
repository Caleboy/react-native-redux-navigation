/**
 * 页面载入页2017-07-25
 */
import React, {Component} from 'react';
import {
  View,
  Image,
  ImageBackground
} from 'react-native';
import Dimensions from 'Dimensions';

var totalWidth = Dimensions.get('window').width;
var totalHeight = Dimensions.get('window').height;
export default class Load extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <ImageBackground source={require('../images/ArtboardOne.png')}
               style={{
                 flex: 1,
                 width: totalWidth,
                 height: totalHeight
               }}>
          <Image
            source={require('../images/homelogo.png')}
            style={{
              width: totalWidth * 0.48,
              height: totalHeight * 0.26,
              resizeMode: 'contain',
              marginLeft: totalWidth * 0.26,
              marginTop: totalHeight * 0.2
            }}
          />
        </ImageBackground>
      </View>
    )
  }
}

