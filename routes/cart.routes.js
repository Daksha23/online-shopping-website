const express = require('express');

const cartController = require('../controllers/cart.controller');

const router = express.Router();

router.post('/items',cartController.addCartItem); // /cart/items

router.get('/',cartController.getCart) ; ///cart/

router.patch('/items',cartController.updateCartItem);


module.exports = router;

