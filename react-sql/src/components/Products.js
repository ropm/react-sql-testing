import React, { Component } from 'react';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';


/*needs a key so we use app.js state product_id for it, then map the App.js 
state products as props to ProductItem, define the state and function delProduct

*/
class Products extends Component {
    render() {
        return (
        this.props.products.map( (product) => (
        <ProductItem key={product.product_id} product={product} delProduct={this.props.delProduct} />
        ))
        )
    }
}

Products.propTypes = {   //proptypes for app.js products array and delproduct function
    products: PropTypes.array.isRequired,
    delProduct: PropTypes.func.isRequired
}

export default Products;