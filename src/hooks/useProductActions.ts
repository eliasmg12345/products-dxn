import { editProduct } from "../context/productSlice"
import { Product } from "../interfaces/product"
import { useAppDispatch } from "./store"


export const useProductActions = () => {

    const dispatch = useAppDispatch()


    const editProducAction = async ({ id, price, name, image, value }: Product) => {
        try {
            dispatch(editProduct({ id, price, name, image, value }))
        } catch (e) {
            console.log(e);
        }
    }


    return { editProducAction }
}

