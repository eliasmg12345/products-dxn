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
    const { addMetricAction, updateMetricAction } = useMetricActions()

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

    const [isFirst, setIsFirst] = useState(true)

    const metric = { productId: product.id, cantidad, name: product.name }


    useEffect(() => {
        if (cantidad === 1 && isFirst) {
            addMetricAction(metric)
            setIsFirst(false)
        }
        updateMetricAction(metric)
    }, [cantidad])

    return (
        <div className="bg-neutral-700 p-1 rounded-md flex flex-col">
            <div className="flex gap-2">
                <img
                    className="w-14 rounded-full object-center pb-1"
                    src={product.image}
                    alt={`product - ${product.image}`} />
                <div className="font-bold text-xs">
                    <p className="text-sky-400">{product.name}</p>
                    <p>Bs. {product.price}</p>
                    <p>{product.value} PV</p>
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
                        className="font-extrabold text-sm hover:border-blue-700 border border-sky-400 rounded-lg mb-1"
                    >+</button>
                    <button
                        type="button"
                        onClick={() => {
                            if (cantidad <= 0) return
                            setCantidad(cantidad - 1)
                        }}
                        className="font-extrabold text-sm border border-rose-500 hover:border-rose-700 rounded-lg"
                    >-</button>
                </div>

                <div className="flex flex-col gap-x-1 w-2/3 content-center h-full items-center">
                    {isEditPrice ? (
                        <div className="text-xs mt-1">
                            <input
                                type="number"
                                value={inputValue}
                                onBlur={() => setTouched(true)}
                                onChange={onInputValueChanged}
                                className={isNotValid ? `border border-red-400 text-gray-700 w-2/3 rounded-lg text-center` : 'text-gray-700 w-2/3 rounded-lg text-center'}
                            />
                            <div className="text-xs flex mt-1">

                            <button
                                onClick={onSave}
                                disabled={inputValue <= 0}
                                className="text-xs border border-green-700 hover:border-green-400 rounded-lg"
                            >Guardar</button>
                            <button
                                onClick={() => setIsEditPrice(false)}
                                className="text-xs border border-red-700 hover:border-red-400 rounded-lg"
                            >Cancelar</button>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => setIsEditPrice(true)}
                            className="border border-green-600 hover:border-green-400 text-xs rounded-lg p-1 mt-1"
                        >Cambiar Precio</button>
                    )}
                </div>

            </div>


        </div>
    )
}

export default Product