import React, {Component} from 'react';
import {
  Platform,
  View
} from 'react-native';

export const instructions = Platform.select({
  ios: <View style={{backgroundColor: 'rgba(0,0,0,0)',height: 18}}></View>,
  android: '',
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