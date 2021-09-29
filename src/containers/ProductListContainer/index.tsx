import React from "react";
import ProductList from "../../components/ProductList";
import ProductService from "../../services/ProductService";
import Product from "../../types/Product";

interface ProductListState {
  productList: [{}];
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
      <div>
        <ProductList productList={this.state.productList} />
      </div>
    )
  }

  // componentDidMount() {}

  componentDidMount() {
    this.retrieveproducts()
  }

  async retrieveproducts() {
    await ProductService.getAll().then(
      response => {
        console.log(response)
        const products = response.data;
        this.setState({ productList: products });
      }
    ).catch(
      error => {
        console.log(error)
      }
    )
  }
}

export default ProductListContainer;