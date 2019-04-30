import { LOAD_PRODUCT } from './actionTypes'

export const loadProduct = id => async dispatch => {
  let data = {}
  try {
    let response = await fetch(`/api/items/${id}`)
    data = await response.json()
  } catch (e) {
    console.log(e)
  } finally {
    dispatch({
      data,
      type: LOAD_PRODUCT
    })
    return Promise.resolve()
  }
}
