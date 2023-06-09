const express = require('express');
const router = express.Router();

const {empleadoGet, empleadoPost, empleadoPut, empleadoDelete, empleadoGetID } = require('../controllers/empleado');

router.get('/', empleadoGet);

router.post('/', empleadoPost);

router.put('/:id', empleadoPut);

router.delete('/:id', empleadoDelete);

router.get('/:id', empleadoGetID);

module.exports = router;