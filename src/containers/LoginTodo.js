import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../components/Login'
import * as CounterActions from '../actions/login'

//将state.counter绑定到props的counter
function mapStateToProps(state){
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    user: state.loginReducer.user,
    status: state.loginReducer.status,
  }
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch){
  return bindActionCreators(CounterActions,dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
