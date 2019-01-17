import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import About from './components/layout/About';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
state = {
  products: []
} //getProducts function will fill this array

//get products from server when component mounts
componentDidMount() {
  this.getProducts();
}

getProducts = () => {
  fetch('http://localhost:4000/products') //fetch from server
  .then(response => response.json())
  .then(response => this.setState({ products: response.data })) //set app state to response from server
  .catch(err => console.error(err))
}

delProduct = (product_id) => {  //get product_id and delete it using server /del 
  fetch(`http://localhost:4000/products/del?product_id=${product_id}`)
  .then(this.getProducts) //then refresh the list
  .catch(err => console.log(err))
}

addProduct = (name, price) => { //function takes name, price and then uses server /add to add the product to db
  fetch(`http://localhost:4000/products/add?name=${name}&price=${price}`)
  .then(this.getProducts)
  .catch(err => console.log(err))
}

/*Router needs to wrap the content, then render the props of App.js, define the state and function
for Products comp, define function for AddProduct since it doesnt need any App.js state, exact path means new page
*/
  render() {
    return (
      <Router> 
      <div className="App">
        <Header />
        <div className="container">
        <Route exact path="/" render={props =>( 
        <React.Fragment>
        <Products 
        products={this.state.products}
        delProduct={this.delProduct}
        />
        <AddProduct addProduct={this.addProduct}/>
        </React.Fragment>
        )} />
        <Route path="/about" component={About} />
        </div>
      </div>
      </Router>
    );
  }
}


export default App;
