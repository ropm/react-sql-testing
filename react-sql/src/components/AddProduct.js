import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddProduct extends Component {
state = {           //component state
    name: '',
    price: ''
}
//needs to be in a array because 2 or more text fields, use event target.value to update the state realtime
onChange = (e) => this.setState({ [e.target.name]: e.target.value, [e.target.price]: e.target.value });


/* form onSubmit function, prevents refreshing, uses App.js addProduct function
which takes name, price as args and this component uses this.state to help pass the args to the function, 
then empty the state once form is submitted
*/
onSubmit = (e) => {
    e.preventDefault();
    this.props.addProduct(this.state.name, this.state.price);
    this.setState({ name: '', price: ''})
}
/*value needs to be same as name="name" and state name, same for price, onChange needs to use this.onChange
and addProduct function needs to use App.js state addProduct function so we use .props to access it
*/
    render() {
        return (
        <form onSubmit={this.onSubmit}>
            <label style={labelStyle} htmlFor="name">Product name: </label>
            <input 
            style={inputStyle}
            name="name"
            value={this.state.name} 
            onChange={this.onChange}
            />
            <br></br>
            <label style={labelStyle} htmlFor="price">Product price:</label>
            <input 
            name="price"
            style={inputStyle}
            value={this.state.price} 
            onChange={this.onChange} />
        <br></br>
        <button className="btn btn-primary" onClick={this.props.addProduct}>Add a product</button>  
        </form>
        )
    }
}

const labelStyle = {
    width: '140px',
    textAlign: 'left'
}

const inputStyle = {
    margin: '10px'
}

AddProduct.propTypes = {    //proptypes for App.js addProduct function,only this because we dont need the state of app.js
    addProduct: PropTypes.func.isRequired
}

export default AddProduct;
