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

}

export default ProductListContainer;