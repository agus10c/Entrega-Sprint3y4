const express = require('express');
const router = express.Router(); // ¡Creamos una instancia de Router!
const productos = require('../data'); 

// GET para obtener todos los productos
// GET /api/productos/ 
router.get('/', (req, res) => {
    res.json(productos); // res.json() envía una respuesta en formato JSON.
});

router.get('/:id', (req, res, next) => {
    const prod = productos.find(p => p.id === parseInt(req.params.id));
    if (!prod) {
        const error = new Error('Producto no encontrado');
        error.status = 404;
        return next(error);
    }
    res.json(prod);
});

module.exports = router; 