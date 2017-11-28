import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../components/AppRoot'
import * as CounterActions from '../actions/load'

//将state.counter绑定到props的counter
function mapStateToProps(state){
  return {
    isLoad: state.loadReducer.isLoad
  }
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch){
  return bindActionCreators(CounterActions,dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
