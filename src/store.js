import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productByIdReducer, productListLoadReducer, productListReducer } from './reducer/ProductReducer'

const reducer = combineReducers({
    productList: productListReducer,
    productById: productByIdReducer,
    productListLoad: productListLoadReducer
})

// const cartItemsFromStorage = localStorage.getItem('cartItems')
//   ? JSON.parse(localStorage.getItem('cartItems'))
//   : []


// ini initiate jadi ini bakal dijalankan terlebih dahulu
const initialState = {

}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
