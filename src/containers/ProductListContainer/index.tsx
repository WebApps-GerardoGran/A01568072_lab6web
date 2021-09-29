import React from "react";
import ProductList from "../../components/ProductList";
import ProductService from "../../services/ProductService";
import Product from "../../types/Product";

interface ProductListState {
  productList: [Product];
}

/**
 * Product List Container
 * @extends {Component<Props, State>}
 */
class ProductListContainer extends React.Component<{}, ProductListState> {
  state = {
    productList: [{}] as [Product]
  }

  /**
   * Renders the container
   * @return {string} - HTML markup for the container
   */
  render() {
    return (
      <ProductList productList={this.state.productList} />
    )
  }

  componentDidMount() {
    ProductService.getAll()
      .then(response => {
        const productList = response.data;
        console.log(productList);
        this.setState({ productList });
      }).catch(error => {
        console.log(error);
      });
  }
}

export default ProductListContainer;