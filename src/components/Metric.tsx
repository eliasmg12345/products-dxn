import { ChangeEvent, useEffect, useState } from "react"
import { useAppSelector } from "../hooks/store"

export const Metric = () => {

  const metrics = useAppSelector(state => state.metrics)
  const products = useAppSelector(state => state.products)

  const [totalPV, setTotalPV] = useState(100)
  const [isExced, setIsExced] = useState(false)

  useEffect(() => {
    if ((totalPV - totalPVs) > 0) {
      setIsExced(true)
    } else {
      setIsExced(false)
    }
  }, [metrics])

  const productFound = products.filter(product => metrics.find(m => product.id === m.productId))

  const productWithAmount = metrics.map((m, i) => {
    return {
      id: i + 1,
      name: productFound.find(p => p.id === m.productId)?.name,
      cantidad: m.cantidad,
      valuePV: productFound.find(p => p.id === m.productId)?.value!,
      price: productFound.find(p => p.id === m.productId)?.price!,
    }
  })

  const handleChangeDatos = (e: ChangeEvent<HTMLInputElement>) => {
    setTotalPV(Number(e.target.value))
  }

  const totalPVs = productWithAmount.reduce((a, b) => (b.cantidad * b.valuePV) + a, 0)
  const totalPrice = productWithAmount.reduce((a, b) => (b.cantidad * b.price) + a, 0)

  return (
    <div className="w-2/4 border border-gray-700">
      <label htmlFor="totalPV">Máximo pv: </label>
      <input
        className="text-gray-500 rounded-lg p-0 text-center w-12 m-3"
        type="text"
        name="totalPV"
        value={totalPV}
        onChange={handleChangeDatos}
      />

      {
        productWithAmount.map((pro, i) =>
          pro.cantidad > 0 ? (
            <div key={i}>
              <div className="flex">
                <p>{pro.cantidad}-</p>
                <p className="truncate">{pro.name}</p>
                <p>= {(pro.cantidad * pro.valuePV).toFixed(2)}pv</p>
              </div>
              <hr className="p-1 m-1" />
            </div>
          ) : ''
        )
      }
      <div>
        <h1>Total</h1>
        <h1 className="text-lg"> <span className={isExced ? 'text-green-500 text-xs' : 'text-rose-500 text-xs'}>{(totalPV - totalPVs).toFixed(2)} </span> {totalPVs.toFixed(1)} PVs</h1>
        <h1>Bs {totalPrice.toFixed(1)}</h1>
      </div>
    </div>
  )
}
