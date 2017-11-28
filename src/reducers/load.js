import { LOAD_STATE } from "../actions/actionTypes"

const initialState = {
  isLoad: true
}
//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_STATE:
      return {
        ...state,
        isLoad: false
      }
    default:
      return state
  }
}