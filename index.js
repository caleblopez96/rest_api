const express = require('express'); // import express js module 
const app = express(); // Create new express app instance

const crypto = require('crypto'); // node function to generate UUID

app.use(express.json()); // middleware function to parse incoming JSON payload

const products = [
    {
        "id": "a5589568-6a40-44c9-91a5-ad50b993efd5",
        "name": "laptop",
        "price": "$500.00",
        "quantity": 4,
        "active": true
    },
    {
        "id": "a5589568-6a40-44c9-91a5-ad50b993efd6",
        "name": "keyboard",
        "price": "$45.00",
        "quantity": 15,
        "active": true
    },
    {
        "id": "a5589568-6a40-44c9-91a5-ad50b993efd7",
        "name": "computer",
        "price": "$1000",
        "quantity": 6,
        "active": true
    }
]

app.get('/', (request, response) => {
  response.send('Testing...');
})

app.get('/products', (request, response) => {
  response.json(products);
})

app.post('/products', (request, response) => {
  const { name, price, quantity, active } = request.body

  // check if request contains a name, if not 422 req
  if(!name) {
    return response.status(422).json({ message: "name is required" });
  }

  const id = crypto.randomUUID();

  products.push({
    id,
    name,
    price,
    quantity,
    active
  })

  response.status(201).json({ message: "product created successfully", id });
})

app.get('/products/:id', (request, response) => {
  const product = products.find(product => product.id == request.params.id)

  response.json(product)
})

app.listen('3000', () => console.log('server started on port 3000'));
