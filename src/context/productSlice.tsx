import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../interfaces/product'
import { getImagenUrl } from '../utils/util'


const data = [
    {
        id: '1',
        name: 'Cocozhi',
        image: getImagenUrl('products/cocozhi.jpg'),
        price: 192,
        value: 6,
    },
    {
        id: '2',
        name: 'Spirulina',
        image: getImagenUrl('products/spirulina.jpg'),
        price: 358,
        value: 16
    },
    {
        id: '3',
        name: 'Vita Cafe',
        image: getImagenUrl('products/cocozhi.jpg'),
        price: 198,
        value: 6,
    },
    {
        id: '4',
        name: 'Nutrizhi',
        image: getImagenUrl('products/spirulina.jpg'),
        price: 271,
        value: 10,
    },
    {
        id: '5',
        name: 'Zhi Mocha',
        image: getImagenUrl('products/cocozhi.jpg'),
        price: 195,
        value: 6,
    },
    {
        id: '6',
        name: 'Lemonzhi',
        image: getImagenUrl('products/lemonzhi.jpg'),
        price: 126,
        value: 5,
    },
    {
        id: '7',
        name: 'Coffee 3 in 1',
        image: getImagenUrl('products/spirulina.jpg'),
        price: 162,
        value: 5,
    },
]

const Products_INITIAL_STATE: Product[] = (() => {
    const persistedState = localStorage.getItem('products_dxn')
    return persistedState ? JSON.parse(persistedState).products : data
})()

export const productSlice = createSlice({
    name: 'products',
    initialState: Products_INITIAL_STATE,
    reducers: {
        editProduct: (state, action: PayloadAction<Product>) => {
            const { id, price, value } = action.payload
            const foundProduct = state.find(product => product.id === id)
            if (foundProduct) {
                foundProduct.price = price
                foundProduct.value = value
            }
        }
    }
})

export const { editProduct } = productSlice.actions

export default productSlice.reducer