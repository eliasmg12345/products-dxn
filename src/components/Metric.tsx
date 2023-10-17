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
        className="text-gray-500 rounded-lg p-0 text-center w-12"
        type="text"
        name="totalPV"
        value={totalPV}
        onChange={handleChangeDatos}
      />
      <h1 className="mb-6">Para llegar a los {totalPV} PV</h1>
      {
        productWithAmount.map((pro, i) =>
          pro.cantidad > 0 ? (
            <p key={i}>{pro.cantidad}-{pro.name}={pro.cantidad * pro.valuePV}pv</p>
          ) : ''
        )
      }
      <hr className="m-3" />
      <div>
        <h1 className="text-lg"> <span className={`text-sm ${isExced ? 'text-green-500' : 'text-rose-500'}   `}>{totalPV - totalPVs} </span>Total:{totalPVs} PVs</h1>
        <h1>Total:Bs {totalPrice}</h1>
      </div>
    </div>
  )
}
