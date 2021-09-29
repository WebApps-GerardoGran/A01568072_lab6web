import Product from "../../types/Product";
import { Card, Typography, CardContent } from "@material-ui/core";

interface ProductCardProps {
  product: Product;
}

/**
 * Product Card elements
 * @returns ProductCard UI elements
 */
const ProductCard: React.FC<ProductCardProps> = (props) => {

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;