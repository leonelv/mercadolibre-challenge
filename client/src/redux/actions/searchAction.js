import { SEARCH_PRODUCTS, RESET_SEARCH } from './actionTypes'

export const searchProduct = query => async dispatch => {
  let data = {}
  try {
    let response = await fetch(`/api/items?q=:${encodeURI(query)}`)

    data = await response.json()
  } catch (e) {
    console.error(e)
  } finally {
    dispatch({
      data,
      type: SEARCH_PRODUCTS
    })
    return Promise.resolve()
  }
}

export const resetSearch = query => async dispatch => {
  dispatch({
    type: RESET_SEARCH
  })
  return Promise.resolve()
}
