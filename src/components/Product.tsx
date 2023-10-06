import { useAppSelector } from "../hooks/store"

const Product = () => {
  const products = useAppSelector(state => state.products.products)
  return (
    <div>
      <h1>Productos</h1>
      {products.map(item => (
        <div key={item.id}>
          <img src="" alt="" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Product