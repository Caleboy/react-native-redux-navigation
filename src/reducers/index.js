import { combineReducers } from 'redux'
import loadReducer from './load'
import loginReducer from './login'
import homeReducer from './home'
import nav from './router'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  nav,
  loadReducer,
  loginReducer,
  homeReducer
})

export default rootReducer;
