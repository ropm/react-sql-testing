import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ProductItem extends Component {

    getStyle = () => { //style function, could also be just a const
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            marginTop: '10px'
        }
    }
/* destructure the App.js state as props, product_id, name, price (DRY)
Then render an item as one div per ProductItem, bind the delProduct function from App.js
to this component with product_id as parameter
*/
    render() {
        const { product_id, name, price } = this.props.product;
        return (
        <div style={this.getStyle()}>
        <p>
            { name } | { price}€
            <button onClick={this.props.delProduct.bind(this, product_id)} style={btnStyle}>x</button>
        </p>
        </div>
        )
    }
}

ProductItem.propTypes = {   //proptypes for App.js products array's object of product and delproduct function
    product: PropTypes.object.isRequired,
    delProduct: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default ProductItem;