
import { useAppSelector } from "../hooks/store"
import { useProductActions } from "../hooks/useProductActions";
import Product from "./Product";

const Products = () => {

  const products = useAppSelector(state => state.products.products)
  const { } = useProductActions()

  console.log(products);

  return (
    <div className="w-4/6">
      <h1>Productos</h1>
      <div className="grid grid-cols-3 gap-4">

        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products