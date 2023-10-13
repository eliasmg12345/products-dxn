import { useAppSelector } from "../hooks/store"

export const Metric = () => {
  const metrics = useAppSelector(state => state.metrics)

  if (metrics.length > 0) {
    console.log(metrics);
  }

  //const productFound = products.filter(product => metrics.find(m => product.id === m.productId))
  /*
  const productWithAmount = metrics.map((m, i) => {
    return {
      id: i,
      name: productFound.find(p => m.productId === p.id)?.name,
      cant: m.cantidad
    }
  })*/

  return (
    <div className="w-1/4 border border-gray-700">
      <h1>Para llegar a los Puntos</h1>
      {
        metrics.map((pro, i) => (
          <p key={i}>{pro.name}-{pro.cantidad}</p>
        ))}
    </div>
  )
}
