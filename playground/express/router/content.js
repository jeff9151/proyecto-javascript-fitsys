const express = require('express');
const router = express.Router();

const path = require('path');
const url = path.join(__dirname, '../static-content', 'about.html');

router.get('/',(req, res) => {
    res.send('<h1>Inicio - Hola</h1><hr><ul><li><a href="/about">Acerca de esta aplicación</a></li><li><a href="/test">Ir a página de prueba</a></li></ul>');
});

router.get('/about',(req, res) => {
    console.log(url);
    res.sendFile(url);
});

router.get('/test',(req, res) => {
    res.send('<h1>Página de prueba</h1><hr><ul><li><a href="/test">Ir a página de prueba</a></li><li><a href="/about">Acerca de esta Aplicación</a></li><li><a href="/">Regresar a la página de inicio</a></li></ul>');
});

module.exports = router;