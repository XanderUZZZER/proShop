import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running....')
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running in ${process.NODE_ENV} mode on port ${PORT}`));