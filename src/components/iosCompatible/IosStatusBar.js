import React, {Component} from 'react';
import {
  Platform,
  View,
  Text
} from 'react-native';

export const instructions = Platform.select({
  ios: <View style={{backgroundColor: 'rgba(0,0,0,0)',height: 18}}></View>,
  android: <Text style={{height: 0}}></Text>,
});

export default class IosStatusBar extends Component {
  render() {
    return (
      <View>
        {instructions}
      </View>
    )
  }
}