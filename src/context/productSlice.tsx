import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../interfaces/product'
import { getImagenUrl } from '../utils/util'


const data = [
    {
        id: '1',
        name: 'Nutrizhi',
        image: getImagenUrl('products/nutrizhi.jpg'),
        price: 242,
        value: 9.5,
    },
    {
        id: '2',
        name: 'Cordyceps Coffe 3 en 1',
        image: getImagenUrl('products/cordyceps3in1.jpg'),
        price: 147,
        value: 5,
    },
    {
        id: '3',
        name: 'Lingzhi Tea Latte',
        image: getImagenUrl('products/lingzhitealatte.jpg'),
        price: 172,
        value: 7,
    },
    {
        id: '4',
        name: 'Lingzhi Coffee 3 en 1',
        image: getImagenUrl('products/lingzhicoffee3in1.jpg'),
        price: 146,
        value: 4.6,
    },

    {
        id: '5',
        name: 'Lingzhi Black Coffee',
        image: getImagenUrl('products/lingzhiblackcoffee.jpg'),
        price: 146,
        value: 4.6,
    },
    {
        id: '6',
        name: 'Cocozhi',
        image: getImagenUrl('products/cocozhi.jpg'),
        price: 169,
        value: 6,
    },
    {
        id: '7',
        name: 'Spirulina Cereal',
        image: getImagenUrl('products/spirulina.jpg'),
        price: 319,
        value: 15.6,
    },
    {
        id: '8',
        name: 'Zhi Mocha',
        image: getImagenUrl('products/zhimocha.jpg'),
        price: 171,
        value: 6.5,
    },
    {
        id: '9',
        name: 'Vita Café',
        image: getImagenUrl('products/vitacafe.jpg'),
        price: 174,
        value: 6.2,
    },
    {
        id: '10',
        name: 'Zhi Mint Plus',
        image: getImagenUrl('products/zhimintplus.jpg'),
        price: 291,
        value: 12,
    },
    {
        id: '11',
        name: 'Lemonzhi',
        image: getImagenUrl('products/lemonzhi.jpg'),
        price: 111,
        value: 4.7,
    },
    {
        id: '12',
        name: 'Lingzhi Coffee 3 en 1 Lite',
        image: getImagenUrl('products/lingzhicoffee3in1.jpg'),
        price: 142,
        value: 4.6,
    },
    {
        id: '13',
        name: 'Mycovita',
        image: getImagenUrl('products/mycovita.jpg'),
        price: 5650,
        value: 280,
    },
    {
        id: '14',
        name: 'Granular Activated Carbon',
        image: getImagenUrl('products/GRANULARACTIVATEDCARBON.jpg'),
        price: 352,
        value: 11.4,
    },
    {
        id: '15',
        name: 'Bioceramic + Mineral Stone + Torumaline',
        image: getImagenUrl('products/WT030.jpg'),
        price: 919,
        value: 39.7,
    },
    {
        id: '16',
        name: 'Ootea Zhi Mocha Mix',
        image: getImagenUrl('products/OoteaZhi.jpg'),
        price: 212,
        value: 7.1,
    },
    {
        id: '17',
        name: 'Ootea Eu Cafe Mix',
        image: getImagenUrl('products/Ootea.jpg'),
        price: 188,
        value: 6.3,
    },
    {
        id: '18',
        name: 'Ootea Cordyceps Coffe Mix',
        image: getImagenUrl('products/OoteaCordyceps.jpg'),
        price: 181,
        value: 5.9,
    },
    {
        id: '19',
        name: 'Ootea Coffee Mix 2 in 1',
        image: getImagenUrl('products/OoteaCoffee.jpg'),
        price: 220,
        value: 7.4,
    },
    {
        id: '20',
        name: 'Ootea Llinghzi Coffee Mix 3 in 1',
        image: getImagenUrl('products/OoteaLlinghzi.jpg'),
        price: 175,
        value: 5.9,
    },
    {
        id: '21',
        name: 'Ootea Vita Cafe Mix',
        image: getImagenUrl('products/OoteaVita.jpg'),
        price: 344,
        value: 13,
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
