import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../components/Home'
import * as CounterActions from '../actions/home';

//将state.counter绑定到props的counter
function mapStateToProps(state){
  return {
    getting: state.homeReducer.getting,
    items: state.homeReducer.items,
  }
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch){
  return bindActionCreators(CounterActions,dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
