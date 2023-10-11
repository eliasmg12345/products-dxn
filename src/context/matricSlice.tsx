import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../interfaces/product'


const metrics_INITIAL_STATE: ProductState = {
    productID:'',
    
}

export const productSlice = createSlice({
    name: 'products',
    initialState: metrics_INITIAL_STATE,
    reducers: {
        refresh: (state: ProductState, action: PayloadAction<Product[]>) => {
            return {
                ...state,
                products: [...action.payload]
            }
        },
        editProduct: (state, action: PayloadAction<Product>) => {
            const { id, price } = action.payload
            const foundProduct = state.products.find(product => product.id === id)
            if (foundProduct) {
                foundProduct.price = price
            }
        }
    }
})

export const { refresh, editProduct } = productSlice.actions

export default productSlice.reducer