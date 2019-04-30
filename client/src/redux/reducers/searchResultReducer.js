import { SEARCH_PRODUCTS, RESET_SEARCH } from '../actions/actionTypes'

const initialState = {}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case SEARCH_PRODUCTS:
      return data
    case RESET_SEARCH:
      return {}
    default:
      return state
  }
}
