
import { useAppSelector } from "../hooks/store"
import { useProductActions } from "../hooks/useProductActions";
import Product from "./Product";

const Products = () => {

  const products = useAppSelector(state => state.products.products)
  const { } = useProductActions()

  console.log(products);

  return (
    <div className="w-2/3">
      <header className="flex justify-between items-center py-5">
        <h1>Productos</h1>
      </header>
      <div className="grid grid-cols-2 justify-center items-center gap-4">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products