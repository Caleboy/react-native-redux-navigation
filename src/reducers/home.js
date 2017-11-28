'use strict';
import * as TYPES from '../actions/actionTypes';
import {homeState} from './initState'

export default function home(state=homeState, action){
  switch(action.type){
    case TYPES.REQUEST_STORES:
      return {
        ...state,
        getting: true
      }
    case TYPES.RECEIVE_STORES: //输入账户名
      return {
        ...state,
        getting: false,
        items: action.store,
        lastUpdated: action.receivedAt
      }
    case TYPES.LOGOUT_TODO:  //输入账户名
      return {
        ...state,
        getting: true,
        items: {}
      }
    default:
      return state;
  }
}