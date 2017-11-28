import React, {Component} from 'react';
import {
  View
} from 'react-native';
import Load from './Load';
import Home from '../containers/HomeTodo';
import IosStatusBar from './IosStatusBar';

export default class AppRoot extends Component {
  componentDidMount() {
    const {loadStateAsync} = this.props;
    loadStateAsync();
  }
  render() {
    const { isLoad } = this.props;
    return (
      <View style={{flex: 1}}>
        <IosStatusBar/>
        {isLoad ? <Load/> : <Home/>}
      </View>
    )
  }
}
AppRoot.navigationOptions = {
  header: null,
}