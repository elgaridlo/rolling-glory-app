import { PRODUCT_ADD_ITEM, PRODUCT_BY_ID_FAIL, PRODUCT_BY_ID_REQUEST, PRODUCT_BY_ID_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SHOW } from "../constant/ProductConstant/ProductConstants"

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload.data }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productByIdReducer = (
  state = { product: {} },
  action,
) => {
  switch (action.type) {
    case PRODUCT_BY_ID_REQUEST:
      return { loading: true }
    case PRODUCT_BY_ID_SUCCESS:
      return { loading: false, productInfo: action.payload.data.attributes }
    case PRODUCT_BY_ID_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productListLoadReducer = (
  state = { product: [], showProduct: [] },
  action,
) => {
  switch (action.type) {
    case PRODUCT_ADD_ITEM:
      const item = action.payload.products

      const tempArr = [...state.product]

      item.forEach((x) => {
        if (tempArr.indexOf(x) < 0) {
          tempArr.push(x);
        }
      });

      return {
        ...state,
        product: [...tempArr],
      }
    case PRODUCT_SHOW:
      return {...state, showProduct: [...action.payload.showproduct] }
    default:
      return state
  }
}
