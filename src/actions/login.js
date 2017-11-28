import * as TYPES from './actionTypes';
import { saveLoginState, getLoginState } from '../store/localStorage';

export function doingLogin(){
  return{
    type:TYPES.LOGIN_DOING,
  }
}
export function loginDone(user,isLoggedIn){
  return{
    type: TYPES.LOGIN_DONE,
    isLoggedIn: isLoggedIn,
    user: user
  }
}
export function doLogIn(user){
  return dispatch => {
    dispatch(doingLogin());
    //模拟用户登录
    fetch('https://github.com/')
      .then((res)=>{
        dispatch(loginDone(user,true));
        saveLoginState(user, true);
        setTimeout(() => {
          dispatch({type: 'HOME'});
        },500)
      }).catch((e)=>{
        dispatch({'type': TYPES.LOGIN_ERR, error: e});
      });
  }
}

export const addUsername = (text) => ({
  type: TYPES.ADD_USERNAME,
  text
});
export const addPassword = (text) => ({
  type: TYPES.ADD_PASSWORD,
  text
});

