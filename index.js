const express = require('express'); // import express js module 

const app = express(); // Create new express app instance

app.use(express.json()); // middleware function to parse incoming JSON payload

app.use('/products', require('./routes/productsRoute'));

app.listen('3000', () => console.log('server started on port 3000'));
