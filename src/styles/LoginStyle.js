import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import * as style from './Styles'
export const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: style.totalWidth,
    height: style.totalHeight
  },
  logo: {
    width:style.totalWidth,
    height:style.totalHeight*0.12,
    alignItems:'center'
  },
  logoImg:{
    width: style.totalWidth*0.3,
    height: style.totalHeight*0.18,
    resizeMode:'stretch'
  },
  input: {
    width: style.totalWidth*0.62,
    height: style.totalHeight*0.12,
    marginTop: style.totalHeight*0.15
  },
  textInput: {
    height: style.totalHeight*0.06,
    borderBottomWidth: 1,
    borderColor: '#333'
  },
  btn:{
    marginTop: style.totalHeight*0.06,
    alignItems:'center'
  },
  btnInfo:{
    width:style.totalWidth * 0.62,
    height: style.totalHeight*0.06,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#173840',
   // color: '#FFFFFF',
  },
  btnReg: {
    backgroundColor:'#FFF',
    borderWidth: style.cheekborder,
    borderStyle: 'solid',
    borderColor: '#173840',
    marginTop:style.totalHeight*0.01
  },
  forget: {
    marginTop: style.totalHeight * 0.02,
  },
  other: {
    width: style.totalWidth * 0.2,
    flexDirection: 'row',
    height:1,
    backgroundColor:'#999',
  },
  orview:{

  },
  Login:{
    fontSize:style.sixFontSize,
    color:'#fff'
  },
  Rigister:{
    fontSize:style.sixFontSize,
    color:'#333'
  },
  oLogo: {
    width: style.totalWidth*0.09,
    height: style.totalHeight*0.07,
  },
  tLogo:{
    marginLeft:style.totalWidth*0.08
  },
  img: {
    width: style.totalWidth*0.09,
    height: style.totalHeight*0.05,
    resizeMode:'stretch',
  },
  version: {
    marginTop: style.totalHeight*0.04,
  },
  loadingTip: {
    position: 'absolute',
    bottom: -30,
    width: '100%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingImg: {
    width: 20,
    height: 20,
    resizeMode: 'stretch'
  }
})