import { StackNavigator } from 'react-navigation';

import Root from '../containers/Root';
import Home from '../containers/HomeTodo';
import Login from '../containers/LoginTodo';
import NewsDetail from '../components/NewsDetail';

//导航
export const AppNavigator =  StackNavigator({
  Root: { screen: Root },
  Home: { screen: Home },
  Login: { screen: Login },
  News: { screen: NewsDetail },
});
