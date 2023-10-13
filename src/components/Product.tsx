import { FC, useState, ChangeEvent, useMemo, useEffect } from "react";
import { useProductActions } from "../hooks/useProductActions";
import { Product } from "../interfaces/product";
import { useMetricActions } from "../hooks/useMetricActions";

interface Props {
    product: Product
}

const Product: FC<Props> = ({ product }) => {
    const [inputValue, setInputValue] = useState(product.price)
    const [isEditPrice, setIsEditPrice] = useState(false)
    const [touched, setTouched] = useState(false)
    const [cantidad, setCantidad] = useState(0)

    const isNotValid = useMemo(() => inputValue <= 0 && touched, [inputValue, touched])

    const { editProducAction } = useProductActions()
    const { addMetricAction } = useMetricActions()

    const onInputValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(e.target.value))
    }

    const onSave = () => {
        if (inputValue === 0) return

        const updateProduct: Product = {
            ...product,
            price: inputValue
        }
        editProducAction(updateProduct)
        setIsEditPrice(false)
    }

    useEffect(() => {
        if (cantidad > 0) {
            addMetricAction({ productId: product.id, cantidad, name: product.name })
        }
    }, [cantidad])



    return (
        <div className="bg-neutral-700 p-2 rounded-md flex flex-col">
            <div className="flex gap-5">
                <img
                    className="w-16 rounded-full object-center pb-1"
                    src={product.image}
                    alt={`product - ${product.image}`} />
                <div className="font-bold text-center w-full">
                    <p>{product.name}</p>
                    <p>Bs. {product.price}</p>
                </div>

            </div>
            <div className="flex gap-2">
                <div className="flex flex-col w-1/3">
                    <button
                        type="button"
                        onClick={() => {
                            if (cantidad > 10) return
                            setCantidad(cantidad + 1)
                        }}
                        className="font-extrabold text-xl hover:border-blue-700 border border-sky-500 rounded-lg mb-1"
                    >+</button>
                    <button
                        type="button"
                        onClick={() => {
                            if (cantidad <= 0) return
                            setCantidad(cantidad - 1)
                        }}
                        className="font-extrabold text-xl border border-rose-300 hover:border-rose-600 rounded-lg"
                    >-</button>
                </div>

                <div className="flex flex-col gap-x-1 w-2/3 content-center h-full items-center">
                    {isEditPrice ? (
                        <div className="">
                            <input
                                type="number"
                                value={inputValue}
                                onBlur={() => setTouched(true)}
                                onChange={onInputValueChanged}
                                className={isNotValid ? `border border-red-400 text-gray-700 w-2/3 rounded-lg text-center` : 'text-gray-700 w-2/3 rounded-lg text-center'}
                            />
                            <button
                                onClick={onSave}
                                disabled={inputValue <= 0}
                                className="text-xs border border-green-700 hover:border-green-400 rounded-lg p-1 m-1"
                            >Guardar</button>
                            <button
                                onClick={() => setIsEditPrice(false)}
                                className="text-xs border border-red-700 hover:border-red-400 rounded-lg p-1"
                            >Cancelar</button>
                        </div>
                    ) : (
                        <button
                            onClick={() => setIsEditPrice(true)}
                            className="border border-green-700 hover:border-green-600 rounded-lg p-1 w-full"
                        >Cambiar Precio</button>
                    )}
                </div>

            </div>


        </div>
    )
}

export default Product