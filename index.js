<<<<<<< HEAD
const express = require('express'); // import express js module 

const app = express(); // Create new express app instance

app.use(express.json()); // middleware function to parse incoming JSON payload

app.use('/products', require('./routes/productsRoute'))

app.listen('3000', () => console.log('server started on port 3000'));
=======
const express = require('express'); // import express js module 

const app = express(); // Create new express app instance

app.use(express.json()); // middleware function to parse incoming JSON payload

app.use('/products', require('./routes/productsRoute'))

app.listen('3000', () => console.log('server started on port 3000'));
>>>>>>> e2fa8a6d759c7474594e87ac23df97b092be7132
