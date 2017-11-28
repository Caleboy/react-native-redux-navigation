
import {
  AsyncStorage
} from 'react-native';

export function saveLoginState(user,state){
  let obj={
    user: user,
    isLoggedIn: state
  };
  AsyncStorage.setItem('login_state',JSON.stringify(obj));
}
export function getLoginState(){
  return new Promise((resolve,reject)=>{
    AsyncStorage.getItem('login_state').then(res=>{
      resolve(JSON.parse(res));
    }).catch(error=>{
      reject(error);
    })
  })
}