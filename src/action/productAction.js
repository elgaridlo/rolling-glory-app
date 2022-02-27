import axios from "axios"
import { PRODUCT_ADD_ITEM, PRODUCT_BY_ID_FAIL, PRODUCT_BY_ID_REQUEST, PRODUCT_BY_ID_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SHOW } from "../constant/ProductConstant/ProductConstants"

export const url = process.env.REACT_APP_API

export const listProductsAction = (pageNumber = '', pageSize = '') => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get(`${url}/gifts?page[number]=${pageNumber}&page[size]=${pageSize}`)

    // console.log('data nih = ', data)
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const productByIdAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_BY_ID_REQUEST })

    const { data } = await axios.get(`${url}/gifts/${id}`)

    console.log('data id = ', data)

    dispatch({
      type: PRODUCT_BY_ID_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const addToProductListLoad = (product) => async (dispatch) => {

  dispatch({
      type: PRODUCT_ADD_ITEM,
      payload: {
          products: product,
      }
  })
}

export const showProductAction = (product) => async (dispatch) => {

  dispatch({
      type: PRODUCT_SHOW,
      payload: {
          showproduct: product,
      }
  })
}