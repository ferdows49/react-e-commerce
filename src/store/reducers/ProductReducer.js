import ActionTypes from "../ActionTypes"

const initialState = {
    products: [],
    currentProduct: []
}

export const productReducer = (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.PRODUCT_LIST_VIEW: return {
            ...state,
            products: action.payload
        }
        case ActionTypes.PRODUCT_DETAIL_VIEW: return {
            ...state,
            currentProduct: action.payload
        }
        default: return state
    }
}