const express = require('express'); // import express js module 

const app = express(); // Create new express app instance

const crypto = require('crypto'); // node function to generate UUID

app.use(express.json()); // middleware function to parse incoming JSON payload

const products = [
  {
    name: "laptop",
    price: "$500.00",
    quantity: 4,
    active: true
  },
  {
    name: "keyboard",
    price: "$45.00",
    quantity: 15,
    active: true
  }
]

app.get('/', (request, response)=>{
  response.send('Testing...');
})

app.get('/products', (request, response) => {
  response.json(products);
})

app.post('/products', (request, response)=>{
  const { name, price, quantity, active } = request.body

  products.push({
    name,
    price,
    quantity,
    active
  })

  response.status(201).json({ message: "product created successfully" });
})

app.listen('3000', () => console.log('server started on port 3000'));
