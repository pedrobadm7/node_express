const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

// Manipulador de erros
app.use((error, request, response, next) => {
  console.log('#### Error Handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('🔥 Server started on port http://localhost:3000'));
