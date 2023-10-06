import { useEffect } from "react"
import { refresh } from "../context/productSlice"
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
        dispatch(refresh(data))
    }
    useEffect(()=>{
        refreshProductsAction()
    },[])

    return {  }
}

