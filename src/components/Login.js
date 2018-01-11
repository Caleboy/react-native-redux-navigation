/**
 * 页面载入页2017-07-25
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import {styles} from '../styles/LoginStyle';

export default class Login extends Component {
  render() {
    const { user, status, doLogIn, addUsername, addPassword } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../images/Artboard.jpg')}
                         style={styles.bgImage}>
          <View style={styles.logo}>
            <Image
              source={require('../images/homelogo.png')}
              style={styles.logoImg}
            />
          </View>
          <View style={styles.input}>
            <View>
              <TextInput
                placeholder={'請輸入登錄名稱或手機號'}
                autoCapitalize={'none'}
                maxLength={16}
                underlineColorAndroid="#666"
                style={styles.textInput}
                onChangeText={(text) => addUsername(text)}
              />
            </View>
            <View>
              <TextInput
                placeholder={'請輸入密碼'}
                autoCapitalize={'none'}
                maxLength={16}
                underlineColorAndroid="#666"
                style={styles.textInput}
                secureTextEntry={true}
                onChangeText={(text) => addPassword(text)}
                ref="foucs"
              />
            </View>
            {
              status === 'doing' ? (<View style={styles.loadingTip}>
                <Image
                  source={require('../images/loading.gif')}
                  style={styles.loadingImg}
                />
              </View>) : <Text></Text>
            }
          </View>
          <View style={styles.btn}>
            <View>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => doLogIn(user)}
              >
                <View style={styles.btnInfo}>
                  <Text style={{color:'#FFF'}}>登 入</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => ''}
              >
                <View style={[styles.btnInfo,styles.btnReg]}>
                  <Text style={styles.Rigister}>註 冊</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.forget}>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={{color:'#2626FE'}}>忘記密碼？</Text>
            </TouchableOpacity>
          </View>
          <View >
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <View style={styles.other}></View>
              <Text style={{margin:10}}>Or</Text>
              <View style={styles.other}></View>
            </View>

            <View style={{flexDirection:'row',justifyContent:'center'}}>
              <View style={styles.oLogo}>
                <TouchableOpacity>
                  <Image
                    source={require('../images/facebook.png')}
                    style={styles.img}
                  />
                </TouchableOpacity>
              </View>
              <View style={[styles.oLogo,styles.tLogo]}>
                <TouchableOpacity>
                  <Image
                    source={require('../images/weixin.png')}
                    style={styles.img}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.version}>
            <Text>Version 0.2</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
