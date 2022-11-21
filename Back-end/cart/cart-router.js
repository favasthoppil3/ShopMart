const express = require('express')
const routerCart = express.Router();
const {AddtoCart,getCArt,deleteCart}=require('./cart-controll')


routerCart.post('/addcart',AddtoCart)
routerCart.get('/getcart',getCArt)
routerCart.delete('/:id',deleteCart)




module.exports = routerCart
    