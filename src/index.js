const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Hello World!');
})

app.listen(3000, () => console.log('🔥 Server started on port http://localhost:3000'));