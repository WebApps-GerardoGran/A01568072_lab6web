import "./index.css";
import Product from "../../types/Product";
import ProductCard from "../ProductCard";

interface ProductListProps {
  productList: [Product];
}

/**
 * Product List elements
 * @returns ProductList UI elements
 */
const ProductList: React.FC<ProductListProps> = (props) => {

  return (
    <div>
      {props.productList.map((product, index) => { <ProductCard product={product} /> })}
    </div>
  );
};

export default ProductList;