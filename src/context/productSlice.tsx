import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../interfaces/product'
import { getImagenUrl } from '../utils/util'


const data = [
    {
        id: '1',
        name: 'Cocozhi',
        image: getImagenUrl('products/cocozhi.jpg'),
        price: 200
    },
    {
        id: '2',
        name: 'Spirulina',
        image: getImagenUrl('products/spirulina.jpg'),

        price: 300
    },
    {
        id: '3',
        name: 'Cocozhi',
        image: getImagenUrl('products/cocozhi.jpg'),

        price: 200
    },
    {
        id: '4',
        name: 'Nutrizhi',
        image: getImagenUrl('products/spirulina.jpg'),

        price: 600
    },
    {
        id: '5',
        name: 'cocozhi',
        image: getImagenUrl('products/cocozhi.jpg'),

        price: 200
    },
    {
        id: '6',
        name: 'Lemonzhi',
        image: getImagenUrl('products/lemonzhi.jpg'),

        price: 250
    },
]

/*
const Products_INITIAL_STATE: ProductState = {
    products: []
}*/

const Products_INITIAL_STATE: Product[] = (() => {
    const persistedState = localStorage.getItem('products_dxn')
    return persistedState ? JSON.parse(persistedState).products : data
})()

export const productSlice = createSlice({
    name: 'products',
    initialState: Products_INITIAL_STATE,
    reducers: {
        editProduct: (state, action: PayloadAction<Product>) => {
            const { id, price } = action.payload
            const foundProduct = state.find(product => product.id === id)
            if (foundProduct) {
                foundProduct.price = price
            }
        }
    }
})

export const { editProduct } = productSlice.actions

export default productSlice.reducer