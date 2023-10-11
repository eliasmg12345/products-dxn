import { useEffect } from "react"
import { editProduct, refresh } from "../context/productSlice"
import { Product } from "../interfaces/product"
import { useAppDispatch } from "./store"
import { getImagenUrl } from '../utils/util'


const data: Product[] = [
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

export const useProductActions = () => {

    const dispatch = useAppDispatch()

    const refreshProductsAction = async () => {
        try {
            const products = data;
            dispatch(refresh(products))
            localStorage.setItem('products', JSON.stringify(products))
        } catch (error) {
            console.log(error);
        }
    }

    const editProducAction = async ({ id, price, name, image }: Product) => {
        try {
            dispatch(editProduct({ id, price, name, image }))
        } catch (e) {
            console.log(e);

        }
    }

    useEffect(() => {
        refreshProductsAction()
    }, [])

    return { editProducAction }
}

