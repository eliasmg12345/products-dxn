import { useAppSelector } from "../hooks/store"
import Product from "./Product";

const Products = () => {
  const products = useAppSelector(state => state.products)
  console.log(products)
  return (
    <div className="w-3/5">
      <header className="flex justify-between items-center py-5">
        <h1>Productos</h1>
      </header>
      <div className="grid sm:grid-cols-3 grid-cols-1 justify-center items-center gap-2">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products