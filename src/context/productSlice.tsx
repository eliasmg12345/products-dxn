import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../interfaces/product'
import { getImagenUrl } from '../utils/util'


const data = [
    {
        id: '1',
        name: 'Nutrizhi',
        image: getImagenUrl('products/nutrizhi.jpg'),
        price: 283,
        value: 9.5,
    },
    {
        id: '2',
        name: 'Cordyceps Coffe 3 en 1',
        image: getImagenUrl('products/cordyceps3in1.jpg'),
        price: 174,
        value: 5,
    },
    {
        id: '3',
        name: 'Lingzhi Tea Latte',
        image: getImagenUrl('products/lingzhitealatte.jpg'),
        price: 204,
        value: 7,
    },
    {
        id: '4',
        name: 'Lingzhi Coffee 3 en 1',
        image: getImagenUrl('products/lingzhicoffee3in1.jpg'),
        price: 169,
        value: 4.6,
    },

    {
        id: '5',
        name: 'Lingzhi Black Coffee',
        image: getImagenUrl('products/lingzhiblackcoffee.jpg'),
        price: 173,
        value: 4.6,
    },
    {
        id: '6',
        name: 'Cocozhi',
        image: getImagenUrl('products/cocozhi.jpg'),
        price: 200,
        value: 6,
    },
    {
        id: '7',
        name: 'Spirulina Cereal',
        image: getImagenUrl('products/spirulina.jpg'),
        price: 374,
        value: 15.6,
    },
    {
        id: '8',
        name: 'Zhi Mocha',
        image: getImagenUrl('products/zhimocha.jpg'),
        price: 203,
        value: 6.5,
    },
    {
        id: '9',
        name: 'Vita Café',
        image: getImagenUrl('products/vitacafe.jpg'),
        price: 206,
        value: 6.2,
    },
    {
        id: '10',
        name: 'Zhi Mint Plus',
        image: getImagenUrl('products/zhimintplus.jpg'),
        price: 346,
        value: 12,
    },
    {
        id: '11',
        name: 'Lemonzhi',
        image: getImagenUrl('products/lemonzhi.jpg'),
        price: 131,
        value: 4.7,
    },
    {
        id: '12',
        name: 'Lingzhi Coffee 3 en 1 Lite',
        image: getImagenUrl('products/lingzhicoffee3in1.jpg'),
        price: 169,
        value: 4.6,
    },
    {
        id: '13',
        name: 'Lions Mane Coffee',
        image: getImagenUrl('products/LionsManeCoffee.jpg'),
        price: 177,
        value: 8.3,
    },
    {
        id: '14',
        name: 'Zhitea',
        image: getImagenUrl('products/Zhitea.jpg'),
        price: 174,
        value: 5.5,
    },
    {
        id: '15',
        name: 'Oocha',
        image: getImagenUrl('products/Oocha.jpg'),
        price: 182,
        value: 7,
    },
    {
        id: '16',
        name: 'Lions Mane Oocha',
        image: getImagenUrl('products/LionsManeOocha.jpg'),
        price: 214,
        value: 8.3,
    },
    {
        id: '17',
        name: 'Spirudle',
        image: getImagenUrl('products/Spirudle.jpg'),
        price: 65,
        value: 2.1,
    },
    {
        id: '18',
        name: 'Vco-L 285ml',
        image: getImagenUrl('products/Vco-l.jpg'),
        price: 359,
        value: 13,
    },
    {
        id: '19',
        name: 'Lions Mane Lemon Matcha',
        image: getImagenUrl('products/LionsManeLemonMatcha.jpg'),
        price: 146,
        value: 5.5,
    },
    {
        id: '20',
        name: 'Oocha Noodle',
        image: getImagenUrl('products/OochaNoodle.jpg'),
        price: 65,
        value: 2.1,
    },
    {
        id: '21',
        name: 'Oozhi Tea 30s',
        image: getImagenUrl('products/OozhiTea.jpg'),
        price: 77,
        value: 2.9,
    },
    {
        id: '22',
        name: 'Sugar',
        image: getImagenUrl('products/Sugar.jpg'),
        price: 20,
        value: 0.6,
    },
    {
        id: '27',
        name: 'Ootea Llinghzi Coffee Mix 3 in 1',
        image: getImagenUrl('products/OoteaLlinghzi.jpg'),
        price: 175,
        value: 5.9,
    },
    {
        id: '26',
        name: 'Ootea Coffee Mix 2 in 1',
        image: getImagenUrl('products/OoteaCoffee.jpg'),
        price: 220,
        value: 7.4,
    },
    {
        id: '25',
        name: 'Ootea Cordyceps Coffe Mix',
        image: getImagenUrl('products/OoteaCordyceps.jpg'),
        price: 181,
        value: 5.9,
    },
    {
        id: '23',
        name: 'Ootea Zhi Mocha Mix',
        image: getImagenUrl('products/OoteaZhi.jpg'),
        price: 212,
        value: 7.1,
    },
    {
        id: '24',
        name: 'Ootea Eu Cafe Mix',
        image: getImagenUrl('products/Ootea.jpg'),
        price: 188,
        value: 6.3,
    },
    {
        id: '28',
        name: 'Ootea Vita Cafe Mix',
        image: getImagenUrl('products/OoteaVita.jpg'),
        price: 215,
        value: 7.4,
    },
    {
        id: '29',
        name: 'Mycovita',
        image: getImagenUrl('products/mycovita.jpg'),
        price: 6706,
        value: 280,
    },
    {
        id: '44',    
        name: 'Granular Activated Carbon',
        image: getImagenUrl('products/GRANULARACTIVATEDCARBON.jpg'),
        price: 381,
        value: 11.4,
    },
    {
        id: '45',
        name: 'Bioceramic + Mineral Stone + Torumaline',
        image: getImagenUrl('products/WT030.jpg'),
        price: 993,
        value: 39.7,
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
