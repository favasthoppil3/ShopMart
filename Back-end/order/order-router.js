const express=require('express')
const routerOrder=express.Router();
const {orderNow,orderGet,orderDeleted}=require('./order-controll')



// routerOrder.post("/placeOrder",placeOrder)
routerOrder.post("/orderNow",orderNow)
routerOrder.get("/orderGet",orderGet)
routerOrder.delete("/orderDelete/:id",orderDeleted)





module.exports=routerOrder
