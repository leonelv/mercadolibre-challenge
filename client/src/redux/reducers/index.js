import { combineReducers } from 'redux'
import searchResult from './searchResultReducer'
import loadProduct from './loadProductReducer'

export default combineReducers({ searchResult, productInfo: loadProduct })
