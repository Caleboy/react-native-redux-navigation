import {LOAD_STATE} from './actionTypes'
//导出加一的方法
export function loadState () {
  return {
    type: LOAD_STATE
  }
}
//导出一个方法,包含一个默认参数delay,返回一个方法,一秒后为false
export function loadStateAsync (delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(loadState())
    }, delay)
  }
}