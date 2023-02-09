const express = require('express');
const app = express();
const port = process.env.port || 8080;

// Router configuration
const content = require('./router/content');

// Middleware
app.use('/', content);

app.listen(port, () => {
    console.log(`Listo para recibir conexiones http://localhost:${port}`);
});


