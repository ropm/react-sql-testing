const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express();

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM Products';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ebin1234',
    database: 'react_sql'
});

connection.connect(err => {
    if(err){
        return err;
    }else{
        console.log('Connected to DB')
    }
});


app.use(cors());

app.get('/', (req, res) => {
    res.send('Products server, go to /products')
});

app.get('/products', (req, res) => {
    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
        if (err){
            return res.send(err)
        }else{
            return res.json({ data: results })
        }
    })
});
app.get('/products/add', (req, res) => { //for .post request, need route.post hook and shoot data, get data from req.data 
    const { name, price } = req.query;
    var n = name;
    var p = price; 
    //const INSERT_PRODUCTS_QUERY = `INSERT INTO Products(name, price) VALUES ('${name}', '${price}')`;
    connection.query('INSERT INTO Products(name, price) VALUES (?, ?)', [n, p], (err, results) => {
        if(err){
            return res.send(err)
        }else{
            return res.send('added products')
        }
    })
});
app.get('/products/del', (req, res) => {
    const { product_id } = req.query;
    var id = product_id;
    connection.query('DELETE FROM Products WHERE product_id=?', id, (err, results) => {
        if(err){
            return res.send(err)
        }else{
            return res.send('deleted product')
        }
    })
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
