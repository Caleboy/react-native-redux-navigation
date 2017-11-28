'use strict';
import * as TYPES from '../actions/actionTypes';
import {initState} from "./initState"

export default function logIn(state=initState, action){
  switch(action.type){
    case TYPES.ADD_USERNAME:  //输入账户名
      return {
        ...state,
        user: {
          ...state.user,
          username: action.text
        }
      };
    case TYPES.ADD_PASSWORD:  //输入密
      return {
        ...state,
        user: {
          ...state.user,
          password: action.text
        }
      };
    case TYPES.LOGIN_INIT:    //初始状态
      return {
        ...state,
        status: 'init'
      };
    case TYPES.LOGIN_DOING:   //正在登录
      return {
        ...state,
        status: 'doing'
      };
    case TYPES.LOGIN_DONE:   //登录完成
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        user: action.user,
        status: 'done'
      }
    case TYPES.LOGOUT_TODO:  //输入账户名
      return {
        ...state,
        isLoggedIn: false,
        user: {}
      }
    case TYPES.LOGIN_ERR:   // 登入错误
      return {
        ...state,
        isLoggedIn: false,
        user: {},
        status: null
      }
    default:
      return state;
  }
}