const express = require('express');
const { createItem, getItems, updateItem, deleteItem } = require('../controllers/crudController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getItems).post(protect, createItem);
router.route('/:id').put(protect, updateItem).delete(protect, deleteItem);

module.exports = router;
