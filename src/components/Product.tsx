import { FC, useState, ChangeEvent, useMemo } from "react";
import { useProductActions } from "../hooks/useProductActions";
import { Product } from "../interfaces/product";

interface Props {
    product: Product
}

const Product: FC<Props> = ({ product }) => {
    const [inputValue, setInputValue] = useState(product.price)
    const [isEditPrice, setIsEditPrice] = useState(false)
    const [touched, setTouched] = useState(false)

    const isNotValid = useMemo(() => inputValue <= 0 && touched, [inputValue, touched])

    const { editProducAction } = useProductActions()

    const onInputValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const onSave = () => {
        if (inputValue === 0) return

        const updateProduct: Product = {
            ...product,
            price: inputValue
        }
        editProducAction(updateProduct)
    }

    return (
        <div className="bg-neutral-700 p-4 rounded-md">
            <img src="" alt="" />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button
                className="font-extrabold"
            >+</button>
            <button
                className="font-extrabold"
            >-</button>

            {isEditPrice ? (
                <div className="flex gap-x-1">
                    <input
                        type="number"
                        value={Number(inputValue)}
                        onBlur={() => setTouched(true)}
                        onChange={onInputValueChanged}
                        className={isNotValid ? `border border-red-400` : ''}
                    />
                    <button
                        onClick={onSave}
                        disabled={inputValue <= 0}
                    >Guardar</button>
                    <button
                        onClick={() => setIsEditPrice(false)}
                    >Cancelar</button>
                </div>
            ) : (
                <button
                    onClick={() => setIsEditPrice(true)}
                >Cambiar Precio</button>
            )}
        </div>
    )
}

export default Product