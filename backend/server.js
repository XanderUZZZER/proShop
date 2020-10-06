const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...')
});

app.get('/api/products/', (req, res) => {
  console.log('All products requested');
  res.json(products)
});

app.get('/api/products/:id', (req, res) => {
  console.log(`Product with id: ${req.params.id} requested`);
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
});

const PORT = 5000;
app.listen(PORT, console.log(`Server is runnind on port ${PORT}`));