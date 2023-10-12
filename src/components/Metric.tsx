import { useAppSelector } from "../hooks/store"

export const Metric = () => {

  const products = useAppSelector(state => state.products)
  const metrics = useAppSelector(state => state.metrics)

  if (metrics) {
    console.log(metrics);
  }

  const nameProductFound = products.filter(product => product.id === metrics.productId)


  return (
    <div className="w-1/4 border border-gray-700">
      <h1>Para llegar a los Puntos</h1>
      <p>Producto: {nameProductFound.name}</p>
    </div>
  )
}
