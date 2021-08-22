import axios from "axios"
import ActionTypes from "../ActionTypes"

export const productListView = (productList) => {
    return {
        type: ActionTypes.PRODUCT_LIST_VIEW,
        payload: productList
    }
}

export const fetchProductList = () => async (dispatch) => {
    const response = await axios.get("https://fakestoreapi.com/products")
    dispatch(productListView(response.data))
}