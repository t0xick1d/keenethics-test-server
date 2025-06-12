const express = require('express');

const router = express.Router();

const ctrl = require('../controlers/bicycle');

const { validateBody, isValidId } = require('../middleweres');

const { schema, updateSchema } = require('../models/bicycle');

// router.get('/', ctrl.getAll);

router.get('/search', ctrl.search);

router.get('/tickets/:searchId', ctrl.getTickets);

// router.get('/:bicycleId', isValidId, ctrl.getById);

// router.post('/', validateBody(schema), ctrl.add);

// router.delete('/:bicycleId', isValidId, ctrl.deleteById);

// router.patch('/:bicycleId/update', isValidId, validateBody(updateSchema), ctrl.updateById);

module.exports = router;
