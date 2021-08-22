import axios from "axios"
import ActionTypes from "../ActionTypes"

export const productDetailView = (productDetail) => {
    return {
        type: ActionTypes.PRODUCT_DETAIL_VIEW,
        payload: productDetail
    }
}

export const fetchProductDetail = (productId) => async (dispatch) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    dispatch(productDetailView(response.data))
}