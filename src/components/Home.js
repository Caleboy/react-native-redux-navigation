import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Login from '../containers/LoginTodo';

export default class Home extends Component {
  componentDidMount() {
    const { getStore } = this.props;
    getStore()
  }
  render() {
    const { items, logOut, navNews } = this.props;
    if(!items.isLoggedIn) return (<Login/>)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40}}> Hello {items.user.username} ! </Text>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => logOut()}
          >
            <View style={{
              width: 240,
              height: 30,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#666',
              alignItems: 'center'
            }}>
              <Text style={{color:'#666',fontSize: 20}}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navNews()}
          >
            <View style={{
              width: 240,
              height: 30,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#666',
              alignItems: 'center'
            }}>
              <Text style={{color:'#666',fontSize: 20}}>Nav News</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

Home.navigationOptions = {
  header: null,
}