import { LOAD_PRODUCT } from '../actions/actionTypes'

const initialState = {}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case LOAD_PRODUCT:
      return data
    default:
      return state
  }
}
