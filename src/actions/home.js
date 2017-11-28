import * as TYPES from './actionTypes';
import { saveLoginState, getLoginState } from '../store/localStorage';

export const dongLogout = () => {
  return {
    type: TYPES.LOGOUT_TODO
  }
}

export const requestStores = () => ({
  type: TYPES.REQUEST_STORES
})

export const receiveStores = (json) => ({
  type: TYPES.RECEIVE_STORES,
  store: json,
  receivedAt: Date.now()
})

export const logOut = () => {
  return dispatch => {
    dispatch(dongLogout());
    saveLoginState({}, false);
  }
}
export const getStore = () => {
  return dispatch => {
    dispatch(requestStores());
    getLoginState().then( res => {
      if(res) {
        let store = res;
        dispatch(receiveStores(store));
      }else{
        dispatch(dongLogout());
      }
    }).catch( e =>{
      dispatch({'type': TYPES.LOGIN_ERR, error: e});
      dispatch(dongLogout());
    })
  }
}
export const navNews = () => {
  return dispatch => {
    dispatch({type: 'NEWS'})
  }
}
