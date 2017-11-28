import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class NewsDetail extends Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40}}> Hello NewsDetail! </Text>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => goBack()}
          >
            <View style={{
              width: 240,
              height: 30,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#666',
              alignItems: 'center'
            }}>
              <Text style={{color:'#666',fontSize: 20}}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}