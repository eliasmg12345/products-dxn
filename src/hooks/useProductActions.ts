import { useEffect } from "react"
import { editProduct, refresh } from "../context/productSlice"
import { Product } from "../interfaces/product"
import { useAppDispatch } from "./store"


const data: Product[] = [
    {
        id: '1',
        name: 'cocozhi',
        price: 200
    },
    {
        id: '2',
        name: 'spirulina',
        price: 300
    }
]

export const useProductActions = () => {

    const dispatch = useAppDispatch()

    const refreshProductsAction = async () => {
        try {
            const products = data;
            dispatch(refresh(products))
        } catch (error) {
            console.log(error);
        }
    }

    const editProducAction = async ({ id, price, name }: Product) => {
        try {
            dispatch(editProduct({ id, price, name }))
        } catch (e) {
            console.log(e);

        }
    }

    useEffect(() => {
        refreshProductsAction()
    }, [])

    return { editProducAction }
}

