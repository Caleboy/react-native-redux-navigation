
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../routers';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Login');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Root');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

export default nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'LOGIN':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),   　// 通过navigat action 改变当前state
        state
      );
      break;
    case 'HOME':
      nextState = AppNavigator.router.getStateForAction(  //  getStateForAction: 根据给定的action来定义返回的navigation sate
        NavigationActions.navigate({ routeName: 'Home' }),   // action  返回上一屏幕并关闭当前屏幕
        state                       // state
      );
      break;
    case 'NEWS':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'News' }),   　// 通过navigat action 改变当前state
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}