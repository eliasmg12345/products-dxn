import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../interfaces/product'

export interface ProductState {
    products: Product[]
}
const Products_INITIAL_STATE: ProductState = {
    products: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState: Products_INITIAL_STATE,
    reducers: {
        refresh: (state: ProductState, action: PayloadAction<Product[]>) => {
            return {
                ...state,
                products: [...action.payload]
            }
        }
    }
})

export const { refresh } = productSlice.actions

export default productSlice.reducer