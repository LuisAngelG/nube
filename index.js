const express = require('express');
const app = express();
const port = 9000;

router.get('/', (solicitud, respuesta) => {
    respuesta.render('index', index.html)
})

router.get('/productos', (solicitud, respuesta) => {
    respuesta.render('productos', productos.html)
})

router.get('/clientes', (solicitud, respuesta) => {
    respuesta.render('clientes', clientes.html)
})